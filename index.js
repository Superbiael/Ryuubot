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
//   bot.user.setActivity("Maybe", {type:"LISTENING"});
  bot.user.setActivity("oh No", {type:0});  
});

bot.on('message', message => {
//   if (message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = 'r!';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0]
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

//   Redirect to a specific channel
   let botschannel = message.guild.channels.find(channel => channel.name === 'bot-channel');
   if(!botschannel) return;
  
     msg = message.content.toLowerCase();
     mention = message.mentions.users.first();

      if (msg.startsWith (prefix + "scout")) {
        number = 74;
        imageNumber = Math.floor (Math.random() * (number)) + 1;
        botschannel.send ({files: ["./scout/" + imageNumber + ".png"]})
      }
  
//      if (msg.startsWith (prefix + "scout")) {
//     return botschannel.send ({files:["./scout/72.png"]});
//   }

  if (msg.startsWith (prefix + "send")) {
       if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice(6);
        mention.send (mentionMessage);
      }

   if(msg.startsWith (prefix + "quote")) {
     number = 14;
     var random = Math.floor (Math.random() * (number)) + 1;
     switch (random) {
       case 1: botschannel.send ("Tenn and Gaku are always fighting."); break;
       case 2: botschannel.send ("Hm? Did you want you touch me some more? \nHaha, should I pet you too?"); break;
       case 3: botschannel.send ("I'd be really happy if you cheered me on!"); break;
       case 4: botschannel.send ("You're so nice. I'll give you a reward for how hard you've worked this year. Just you wait!"); break;
       case 5: botschannel.send ("I think the reason why everyone likes you is because you're such a cheerful and cute person."); break;
       case 6: botschannel.send ("You got the wrong person, I'm not as handsome as him."); break;
       case 7: botschannel.send ("Because of all of you, I've been able to keep going even when I've felt like throwing in the towel. Thank you for the unbelieveable amount of courage and strength you've given me."); break;
       case 8: botschannel.send ("Gaku and Tenn seem excited about this, so I need to do my best too!"); break;
       case 9: botschannel.send ("I want to take this chance to get to know Sougo-kun better."); break;
       case 10: botschannel.send ("I really like MEZZO\"'s songs. I listened to \"Shards of Love\" too! Those two can create such perfect harmonies that you'd like they were born as one."); break;
       case 11: botschannel.send ("On our days off, I go out for drives with Gaku. Tenn doesn't go out much, so we watch DVDs together!"); break;
       case 12: botschannel.send ("Since I'm always rabbit chatting with you I never feel like we're apart, but we barely meet in real life. I'd really like to see you too!"); break;
       case 13: botschannel.send ("I thought about this a lot and I think what I like about myself the most is that I'm a part of TRIGGER. \nI used to think of it as a burden sometimes, but now it's my favorite thing about myself."); break;
       case 14: botschannel.send ("I encountered a light so bright that it was burned into my memory. Let's tie those lights together, and spread them to the ends of the world so that we won't lose sight of each other even in a storm."); break;
    }
  }

  if (msg.startsWith ("good morning ryuu")) {
    return botschannel.send("Good morning! Every time I wake up, my hair is always a mess. It's so troublesome...");
  }

  if (msg.startsWith ("good night ryuu")) {
    return botschannel.send ("Good night! Get lots of sleep tonight so I can see you tomorrow too.");
  }
  
  if(cmd ===`${prefix}help`){
    let helpembed = new Discord.RichEmbed()
    .setDescription("Do not include < > when using commands. \nCommand phrases are not caps sensitive")
    .setColor("#213e59")
    .addField("Commands:","**r!yuu** *<question>* | Ask him anything. \n**r!send** *<@user> <message>* | Send a DM to the mentioned user\n**r!scout** | Solo Yolo \n**r!quote** | Random quote\n**r!say** *<message>* | Have the bot say anything you want\n**r!help** | Displays this help message \n**r!botinfo**")
    .addField("Basic r!commands:", "mafia (alias:maf) || cat ")
    .addField("Command phrases:", "Good morning Ryuu || Good night Ryuu");
    botschannel.send(helpembed);
  }

   if(cmd === `${prefix}cat`){
    return botschannel.send ({files:["./images/nya.png"]});
  }
  
  if(cmd === `${prefix}say`){
    let botmessage = args.join(" ");
    message.delete().catch();
    return botschannel.send(botmessage);
  }

  if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
    return botschannel.send("maf maf");
  }
});

bot.login(process.env.token);
