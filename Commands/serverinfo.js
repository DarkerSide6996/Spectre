const Discord = require("discord.js");
colour = require("../botconfig.json");
let date = require('date-and-time');

module.exports.run = async (bot, message, args, ops) => {

  let sicon = (message.guild.iconURL)

  let now = new Date();
  let sdate = (date.format(now, 'DD/MM/YYYY'));

  let serverembed = new Discord.RichEmbed()
  .setAuthor(`${message.guild.name}`, `${message.guild.displayAvatrURL}`)
  .setThumbnail(sicon)
  .setColor(colour.blue)
  .addField("Server Name", message.guild.name)
  .addField("Created On", message.guild.createdAt)
  .addField("You Joined", message.guild.joinedAt)
  .addField("Total Members", message.guild.memberCount)
  .setFooter(`Bot ID: ${bot.user.id} • ${sdate}`);

  return message.channel.send(serverembed);

}

module.exports.help = {
  name: "serverinfo"
}
