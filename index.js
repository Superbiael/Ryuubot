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
  bot.user.setActivity("Maybe", {type:"LISTENING"});
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

     let botschannel = message.guild.channels.find(`name`, "idolbot7");
     if(!botschannel) return message.channel.send("Couldn't find bot channel.");
  
     msg = message.content.toLowerCase();
     mention = message.mentions.users.first();


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

      if(msg.startsWith (prefix + "scout")) {
          number = 61;
          var random = Math.floor (Math.random() * (number)) + 1;
          switch (random) {
            case 1: botschannel.send ({files:["./images/ryuu_birthday_sr.png"]}); break;
            case 2: botschannel.send ({files:["./images/ryuu_birthday_ssr.png"]}); break;
            case 3: botschannel.send ({files:["./images/ryuu_blackside_ssr.png"]}); break;
            case 4: botschannel.send ({files:["./images/ryuu_bno_ssr.png"]}); break;
            case 5: botschannel.send ({files:["./images/ryuu_christmas_ssr.png"]}); break;
            case 6: botschannel.send ({files:["./images/ryuu_daybreak_ssr.png"]}); break;
            case 7: botschannel.send ({files:["./images/ryuu_diafus_ssr.png"]}); break;
            case 8: botschannel.send ({files:["./images/ryuu_endofyear_sr.png"]}); break;
            case 9: botschannel.send ({files:["./images/ryuu_endofyear_ssr.png"]}); break;
            case 10: botschannel.send ({files:["./images/ryuu_gardentea_ssr.png"]}); break;
            case 11: botschannel.send ({files:["./images/ryuu_gothichalloween_ssr.png"]}); break;
            case 12: botschannel.send ({files:["./images/ryuu_greatescape_ssr.png"]}); break;
            case 13: botschannel.send ({files:["./images/ryuu_heaventlyvisitor_ur.png"]}); break;
            case 14: botschannel.send ({files:["./images/ryuu_kindpudding_ssr.png"]}); break;
            case 15: botschannel.send ({files:["./images/ryuu_lasdim_ssr.png"]}); break;
            case 16: botschannel.send ({files:["./images/ryuu_leopa_sr.png"]}); break;
            case 17: botschannel.send ({files:["./images/ryuu_leopa_ssr.png"]}); break;
            case 18: botschannel.send ({files:["./images/ryuu_linked_ssr.png"]}); break;
            case 19: botschannel.send ({files:["./images/ryuu_lovegame_ssr.png"]}); break;
            case 20: botschannel.send ({files:["./images/ryuu_marchendream_ssr.png"]}); break;
            case 21: botschannel.send ({files:["./images/ryuu_mlullaby_ssr.png"]}); break;
            case 22: botschannel.send ({files:["./images/ryuu_monster_sr.png"]}); break;
            case 23: botschannel.send ({files:["./images/ryuu_monster_ssr.png"]}); break;
            case 24: botschannel.send ({files:["./images/ryuu_newyear_ssr.png"]}); break;
            case 25: botschannel.send ({files:["./images/ryuu_order_ssr.png"]}); break;
            case 26: botschannel.send ({files:["./images/ryuu_ordinarydays_r.png"]}); break;
            case 27: botschannel.send ({files:["./images/ryuu_ordinarydays_sr.png"]}); break;
            case 28: botschannel.send ({files:["./images/ryuu_ordinarydays_ssr.png"]}); break;
            case 29: botschannel.send ({files:["./images/ryuu_outdoor_sr.png"]}); break;
            case 30: botschannel.send ({files:["./images/ryuu_outdoor_ssr.png"]}); break;
            case 31: botschannel.send ({files:["./images/ryuu_outdoor_ur.png"]}); break;
            case 32: botschannel.send ({files:["./images/ryuu_rabbitparka_sr.png"]}); break;
            case 33: botschannel.send ({files:["./images/ryuu_rabbitparka_ssr.png"]}); break;
            case 34: botschannel.send ({files:["./images/ryuu_rehearsal_r.png"]}); break;
            case 35: botschannel.send ({files:["./images/ryuu_rehearsal_sr.png"]}); break;
            case 36: botschannel.send ({files:["./images/ryuu_rehearsal_ssr.png"]}); break;
            case 37: botschannel.send ({files:["./images/ryuu_rehearsal_ur.png"]}); break;
            case 38: botschannel.send ({files:["./images/ryuu_rti_ssr.png"]}); break;
            case 39: botschannel.send ({files:["./images/ryuu_sparkle_ssr.png"]}); break;
            case 40: botschannel.send ({files:["./images/ryuu_sweets_ssr.png"]}); break;
            case 41: botschannel.send ({files:["./images/ryuu_taisho_ssr.png"]}); break;
            case 42: botschannel.send ({files:["./images/ryuu_triggeracadamy_r.png"]}); break;
            case 43: botschannel.send ({files:["./images/ryuu_triggeracadamy_sr.png"]}); break;
            case 44: botschannel.send ({files:["./images/ryuu_triggeracadamy_ssr.png"]}); break;
            case 45: botschannel.send ({files:["./images/ryuu_triggerpolice_r.png"]}); break;
            case 46: botschannel.send ({files:["./images/ryuu_triggerpolice_sr.png"]}); break;
            case 47: botschannel.send ({files:["./images/ryuu_triggerpolice_ssr.png"]}); break;
            case 48: botschannel.send ({files:["./images/ryuu_valentine_ssr.png"]}); break;
            case 49: botschannel.send ({files:["./images/ryuu_visualartexpo_ssr.png"]}); break;
            case 50: botschannel.send ({files:["./images/ryuu_whiteday_ssr.png"]}); break;
            case 51: botschannel.send ({files:["./images/ryuu_whitedaysp_sr.png"]}); break;
            case 52: botschannel.send ({files:["./images/ryuu_whitedaysp_ssr.png"]}); break;
            case 53: botschannel.send ({files:["./images/ryuu_winterwonderland_sr.png"]}); break;
            case 54: botschannel.send ({files:["./images/ryuu_winterwonderland_ssr.png"]}); break;
            case 55: botschannel.send ({files:["./images/ryuu_work_sr.png"]}); break;
            case 56: botschannel.send ({files:["./images/ryuu_work_ssr.png"]}); break;
            case 57: botschannel.send ({files:["./images/ryuu_wishes_sr.png"]}); break;
            case 58: botschannel.send ({files:["./images/ryuu_wishes_ssr.png"]}); break;
            case 59: botschannel.send ({files:["./images/ryuu_xmasmagic_ssr.png"]}); break;
            case 60: botschannel.send ({files:["./images/ryuu_xmaxrock_ssr.png"]}); break;
            case 61: botschannel.send ({files:["./images/ryuu_zodiac_ssr.png"]}); break;
          }
        }

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
       case 1: message.channel.send ("Tenn and Gaku are always fighting."); break;
       case 2: message.channel.send ("Hm? Did you want you touch me some more? \nHaha, should I pet you too?"); break;
       case 3: message.channel.send ("I'd be really happy if you cheered me on!"); break;
       case 4: message.channel.send ("You're so nice. I'll give you a reward for how hard you've worked this year. Just you wait!"); break;
       case 5: message.channel.send ("I think the reason why everyone likes you is because you're such a cheerful and cute person."); break;
       case 6: message.channel.send ("You got the wrong person, I'm not as handsome as him."); break;
       case 7: message.channel.send ("Because of all of you, I've been able to keep going even when I've felt like throwing in the towel. Thank you for the unbelieveable amount of courage and strength you've given me."); break;
       case 8: message.channel.send ("Gaku and Tenn seem excited about this, so I need to do my best too!"); break;
       case 9: message.channel.send ("I want to take this chance to get to know Sougo-kun better."); break;
       case 10: message.channel.send ("I really like MEZZO\"'s songs. I listened to \"Shards of Love\" too! Those two can create such perfect harmonies that you'd like they were born as one."); break;
       case 11: message.channel.send ("On our days off, I go out for drives with Gaku. Tenn doesn't go out much, so we watch DVDs together!"); break;
       case 12: message.channel.send ("Since I'm always rabbit chatting with you I never feel like we're apart, but we barely meet in real life. I'd really like to see you too!"); break;
       case 13: message.channel.send ("I thought about this a lot and I think what I like about myself the most is that I'm a part of TRIGGER. \nI used to think of it as a burden sometimes, but now it's my favorite thing about myself."); break;
       case 14: message.channel.send ("I encountered a light so bright that it was burned into my memory. Let's tie those lights together, and spread them to the ends of the world so that we won't lose sight of each other even in a storm."); break;
    }
  }

  if (msg.startsWith ("good morning ryuu")) {
    return message.channel.send("Good morning! Every time I wake up, my hair is always a mess. It's so troublesome...");
  }

  if (msg.startsWith ("good night ryuu")) {
    return message.channel.send ("Good night! Get lots of sleep tonight so I can see you tomorrow too.");
  }
  
  if(cmd ===`${prefix}help`){
    let helpembed = new Discord.RichEmbed()
    .setDescription("Do not include < > when using commands. \nCommand phrases are not caps sensitive")
    .setColor("#213e59")
    .addField("Commands:","**r!yuu** *<question>* | Ask him anything. \n**r!send** *<@user> <message>* | Send a DM to the mentioned user\n**r!scout** | Solo Yolo \n**r!quote** | Random quote\n**r!say** *<message>* | Have the bot say anything you want\n**r!help** | Displays this help message \n**r!botinfo**")
    .addField("Basic r!commands:", "mafia (alias:maf) || rank || cat ")
    .addField("Command phrases:", "Good morning Ryuu || Good night Ryuu");
    message.channel.send(helpembed);
  }
  
  if(cmd ===`${prefix}botinfo`){
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#213e59")
    .setThumbnail(bicon)
    .addField("# of quotes:", "14")
    .addField("Scout:", "61")
  return message.channel.send(botembed);
  }

   if(cmd === `${prefix}cat`){
    botschannel.send ({files:["./images/nya.png"]});
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
