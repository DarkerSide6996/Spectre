const Discord = require("discord.js");
let coins = require("../coins.json");
colour = require("../botconfig.json");
let date = require('date-and-time');

module.exports.run = async (bot, message, args) => {

  let icon = (`http://pa1.narvii.com/6373/f7ba18f56c0b619c860d22d5127bb1968a48562b_00.gif`)
  let cuser = message.mentions.users.first() || message.author;

  if(!coins[cuser.id]){
    coins[cuser.id] = {
      coins: 0
    };
  }

  let uCoins = coins[cuser.id].coins;

  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(cuser.tag, cuser.displayAvatarURL)
  .setColor("#FFD700")
  .setThumbnail(icon)
  .addField("Amount of coins:", uCoins);

  return message.channel.send(coinEmbed);

}

module.exports.help = {
  name: "coins"
}
