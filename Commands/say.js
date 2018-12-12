const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args, ops) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "Manage messages");
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage)

}

module.exports.help = {
  name: "say"
}
