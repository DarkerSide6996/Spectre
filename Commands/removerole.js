const Discord = require("discord.js");
colour = require("../botconfig.json");
let date = require('date-and-time');

module.exports.run = async (bot, message, args, ops) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply(`<@${message.author.id}>`,"You can't remove a role to that person.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user.");
  let role = args.slice(1).join(" ");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role");
  await(rMember.removeRole(gRole.id));

  return message.channel.send(`<@${rMember.id}> has lost the ${gRole.name} role.`);
}
module.exports.help = {
  name: "removerole"
}
