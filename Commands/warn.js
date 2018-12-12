const Discord = require("discord.js");
const fs = require("fs");
const errors = require("../utils/errors.js");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
let colour = require("../botconfig.json");
let date = require('date-and-time');

module.exports.run = async (bot, message, args, ops) => {

  if (!message.content.startsWith(prefix)) return;

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "Manage messages");
  let wUser = message.mentions.members.first()
  if(!wUser) return message.channel.send("Couldnt find user")
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, you can't warn that user.");
  args.slice(1).join(" ");
  if (!reason) return message.reply("Please add a reason.")

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let now = new Date();
  let sdate = (date.format(now, 'DD/MM/YYYY'));

  let warnEmbed = new Discord.RichEmbed()
  .setColor(colour.orange)
  .setTitle("Warn")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned By", `${message.author} with ID: ${message.author.id}`)
  .addField("Warned In", message.channel)
  .addField("Number of warnings", warns[wUser.id].warns)
  .addField("Reason", reason)
  .setFooter(`Bot ID: ${bot.user.id} • ${sdate}`);

  return message.channel.send(warnEmbed);

}
module.exports.help = {
  name: "warn"
}
