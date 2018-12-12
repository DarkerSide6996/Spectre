const Discord = require("discord.js");
let colour = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  let embedU = new Discord.RichEmbed()
  .setTitle("User Commands")
  .setColor(colour.green)
  .addField("8ball", "Ask Spectre the all knowing a question")
  .addField("Usage:", "{prefix}8ball [question]")
  .addBlankField(true)
  .addField("botinfo", "Shows information on Spectre")
  .addField("Usage:", "{prefix}botinfo")
  .addBlankField(true)
  .addField("botservers", "Shows how many servers Spectre is in | **Usage: {prefix}botservers**")
  .addField("coins", "Displays how many you have on your account | **Usage: {prefix}coins**")
  .addField("dice", "Rolls a 6 faced dice | **Usage: {prefix}dice**")
  .addField("fortnite", "Get fortnite stats from a epic account | **Usage: {prefix}fortnite [xbl, ps, pc] [username]**")
  .addField("hug", "The name is pretty explanatory | **Usage: {prefix}hug [user]**")
  .addField("invite", "Sends the link to invite spectre to a different server  | **Usage: {prefix}invite**")
  .addField("level", "Displays your level | **Usage: {prefix}level**")
  .addField("meme", "Sends a meme | **Usage: {prefix}meme**");

  let embedM = new Discord.RichEmbed()
  .setTitle("Moderator Commands")
  .setColor(colour.yellow)
  .addField("kick", "Usage: {prefix}kick [user] [reason]")
  .addField("mute", "Usage: {prefix}mute [user] [time]");
  
  let embedA = new Discord.RichEmbed()
  .setTitle("Administrator Commands")
  .setColor(colour.red)
  .addField("addrole", "Usage: {prefix}addrole [user] [role]")
  .addField("botinfo", "Usage: {prefix}autorole [role]");

  message.author.send(embedU)

  if(message.member.hasPermission("MANAGE_MESSAGES"))
  message.author.send(embedM)

  if(message.member.hasPermission("ADMINISTRATOR"))
  message.author.send(embedA)

}

module.exports.help = {
  name: "help"
}
