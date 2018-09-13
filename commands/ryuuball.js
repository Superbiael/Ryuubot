const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!args[0]) return message.reply("Can you repeat that?");
   let replies = ["I think so?", "I think either way is fine. ^^", "You're relying on me for this?","That's not a good idea.","No...?","Yes!","I believe in you!","Huh?","I-I definately can't!","That's impossible!", "Of course!"];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.slice(0).join(" ");

   let ballembed = new Discord.RichEmbed()
   .setColor("#213e59")
   .addField("Question:", question)
   .addField("Answer:", replies[result]);

   let botschannel = message.guild.channels.find(`name`, "bot-channel");
   if(!botschannel) return;
   return botschannel.send(ballembed);
}

module.exports.help = {
  name:"ryuu"
}
