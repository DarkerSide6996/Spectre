const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

  let replies = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let bicon = (`https://ih1.redbubble.net/image.440271458.2964/ap,550x550,12x12,1,transparent,t.png`);

  let result = Math.floor((Math.random() * replies.length))
  let person = args.slice(0).join(" ");

  message.channel.send(`**🤔  |  ${message.author.username}**`+`, i think i would give ${person} a ${result}/10`);

}

module.exports.help = {
  name: "rate"
}
