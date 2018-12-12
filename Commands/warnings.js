const Discord = require("discord.js")
const fs = require("fs")
const ms = require("ms")
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
colour = require("../botconfig.json");
let date = require('date-and-time');

module.exports.run = async (bot, message, args, ops) => {

  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find that user.");
  let warnlevel = warns[wUser.id].warns;

  let now = new Date();
  let sdate = (date.format(now, 'DD/MM/YYYY'));

  let warnlevelEmbed = new Discord.RichEmbed()
  .setDescription("Warnings")
  .setColor(colour.green)
  .addField("User", `<@${wUser.id}>`)
  .addField("Number of warnings", warns[wUser.id].warns)
  .setFooter(`Bot ID: ${bot.user.id} • ${sdate}`);

  return message.channel.send(warnlevelEmbed)

}

module.exports.help = {
  name: "warnings"
}
