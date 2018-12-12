const Discord = require("discord.js");
colour = require("../botconfig.json");
let date = require('date-and-time');

module.exports.run = async (bot, message, args) => {

  let replies = ["1", "2", "3", "4", "5", "6"];

  let result = Math.floor((Math.random() * replies.length));

  let diceEmbed = new Discord.RichEmbed()
  .setTitle("Dice")
  .setColor(colour.blue)
  .addField("you rolled a:", replies[result]);

  message.channel.send(diceEmbed);

}

module.exports.help = {
  name: "dice"
}
