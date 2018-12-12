const Discord = require("discord.js");
const errors = require("../utils/errors.js");
let colour = require("../botconfig.json");
let lchannel = require("../lchannel.json");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "Ban Members");

  let bUser = message.mentions.members.first();
  if (!bUser) return message.channel.send("Couldn't find user.");
  let bReason = args.slice(1).join(" ");
 
  if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.reply("That person can't be Banned");


  let banEmbed = new Discord.RichEmbed()
  .setAuthor("Ban")
  .setColor(colour.red)
  .addField("Banned User", `${bUser} with ID: ${bUser.id}`, true)
  .addField("Banned By", `${message.author} with ID: ${message.author.id}`, true)
  .addField("Banned In", message.channel, true)
  .addField("Reason", bReason, true)
  .setTimestamp(new Date())
  .setFooter(`Bot ID: ${bot.user.id}`);

  let banEmbed2 = new Discord.RichEmbed()
  .setTitle("Ban")
  .setColor(colour.red)
  .addField("Banned By", `${message.author.username} with ID: ${message.author.id}`, true)
  .addField("Reason", bReason, true)
  .setTimestamp(new Date())
  .setFooter(`Bot ID: ${bot.user.id}`);

  bUser.send(banEmbed2)
  message.guild.ban(bUser)
  if(lchannel[message.guild.id] === message.guild.id)
  lchannelc = member.guild.channels.find(ch => ch.id === lchannel[member.guild.id].lchannel);
  lchannelc.send(banEmbed);

}

module.exports.help = {
  name: "ban"
}
