const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();
const prefix = "r!";

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.legnth <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("oh No", {type:0});
});

bot.on('message', message => {
  if (message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = 'r!';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0]
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

     msg = message.content.toLowerCase();
     mention = message.mentions.users.first();

     if(msg.startsWith (prefix + "scout")) {
       return message.channel.send("This command isn't finished yet.");
     }

   if(msg.startsWith (prefix + "rank")) {
       number = 5;
       var random = Math.floor (Math.random() * (number)) + 1;
       switch (random) {
         case 1: message.channel.send ("It's all thanks to you! Thank you!"); break;
         case 2: message.channel.send ("Even I can do it if I try!"); break;
         case 3: message.channel.send ("I wonder if our appeal was conveyed to you."); break;
         case 4: message.channel.send ("I can still go on!"); break;
         case 5: message.channel.send ("Shall we practice together?"); break;
      }
    }

    // if(msg.startsWith (prefix + "scout")) {
    //     number = 38;
    //     var random = Math.floor (Math.random() * (number)) + 1;
    //     switch (random) {
    //       // case 1: message.channel.send (""); break;
    //       // case 2: message.channel.send (""); break;
    //       // case 3: message.channel.send (""); break;
    //       // case 4: message.channel.send (""); break;
    //       // case 5: message.channel.send (""); break;
    //       // case 6: message.channel.send (""); break;
    //     }
    //   }

  if (msg.startsWith (prefix + "send")) {
       if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice(6);
        mention.send (mentionMessage);
      }

   if(msg.startsWith (prefix + "quote")) {
     number = 13;
     var random = Math.floor (Math.random() * (number)) + 1;
     switch (random) {
       case 1: message.channel.send ("Tenn and Gaku are always fighting."); break;
       case 2: message.channel.send ("Hm? Did you want you touch me some more? \nHaha, should I pet you too?"); break;
       case 3: message.channel.send ("I'd be really happy if you cheered me on!"); break;
       case 4: message.channel.send ("You're so nice. I'll give you a reward for how hard you've worked this year. Just you wait!"); break;
       case 5: message.channel.send ("I think th ereason why everyone likes you is because you're such a cheerful and cute person."); break;
       case 6: message.channel.send ("You got the wrong person, I'm not as handsome as him."); break;
       case 7: message.channel.send ("Because of all of you, I've been able to keep going even when I've felt like throwing in the towel. Thank you for the unbelieveable amount of courage and strength you've given me."); break;
       case 8: message.channel.send ("Gaku and Tenn seem excited about this, so I need to do my best too!"); break;
       case 9: message.channel.send ("I want to take this chance to get to know Sougo-kun better."); break;
       case 10: message.channel.send ("I really like MEZZO\"'s songs. I listened to \"Shards of Love\" too! Those two can create such perfect harmonies that you'd like they were born as one."); break;
       case 11: message.channel.send ("On our days off, I go out for drives with Gaku. Tenn doesn't go out much, so we watch DVDs together!"); break;
       case 12: message.channel.send ("Since I'm always rabbit chatting with you I never feel like we're apart, but we barely meet in real life. I'd really like to see you too!"); break;
       case 13: message.channel.send ("I thought about this a lot and I think what I like about myself the most is that I'm a part of TRIGGER. \nI used to think of it as a burden sometimes, but now it's my favorite thing about myself."); break;
    }
  }

  if (msg.startsWith ("good morning ryuu")) {
    return message.channel.send("Good morning! Every time I wake up, my hair is always a mess. It's so troublesome...");
  }

  if(cmd ===`${prefix}help`){
    let helpembed = new Discord.RichEmbed()
    .setDescription("Do not include < > when using commands. \nCommand phrases are not caps sensitive")
    .setColor("#213e59")
    .addField("Commands:","**r!yuu** *<question>* | Ask him anything. \n**r!send** *<@user> <message>* | Send a DM to the mentioned user\n**r!scout** | Solo Yolo \n**r!quote** | Random quote\n**r!say** *<message>* | Have the bot say anything you want\n**r!help** | Displays this help message")
    .addField("Basic r!commands:", "mafia (alias:maf) || rank")
    .addField("Command phrases:", "Good morning Ryuu");
    message.channel.send(helpembed);
  }

  if(cmd ===`${prefix}botinfo`){
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#213e59")
    .setThumbnail(bicon)
    .addField("Name:", bot.user.username)
    .addField("Twitter:", "https://twitter.com/Superbiael");
  return message. channel.send(botembed);
  }

  if(cmd === `${prefix}say`){
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);
  }

  if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
    return message.channel.send("maf maf");
  }
});

bot.login(process.env.token);
