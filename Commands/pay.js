const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
colour = require("../botconfig.json");
let date = require('date-and-time');

module.exports.run = async(bot, message, args) => {

  if(!coins[message.author.id]){
    return message.reply("You don't have any coins!")
}

  let pUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (pUser.id == message.author.id){
    return message.reply("Sorry, you can't give yourself money.");
  }

  if(!coins[pUser.id]){
    coins[pUser.id] ={
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins
  let sCoins = coins[message.author.id].coins

  if(sCoins < args[0]) return message.reply("You don't have enough coins.");

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  let picon = (`https://i.imgur.com/J1BdoTU.png`);

  let now = new Date();
  let sdate = (date.format(now, 'DD/MM/YYYY'));

  let pEmbed = new Discord.RichEmbed()
  .setTitle("Payments")
  .setThumbnail(picon)
  .setColor("#FFD700")
  .addField("Sender:", `<@${message.author.id}>`)
  .addField("Receiver:", `<@${pUser.id}>`)
  .addField("Amount:", args[1])
  .setFooter(`Bot ID: ${bot.user.id} • ${sdate}`);

  return message.channel.send(pEmbed);

  fs.writeFile("../coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });

}

module.exports.help = {
  name: "pay"
}
