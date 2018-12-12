const Discord = require("discord.js");
colour = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply(`<@${message.author.id}>`,"You can't add a role to that person.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user.");
  let role = args.slice(1).join(" ");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find role.");

  if(rMember.roles.has(gRole.id))return message.reply("They already have that role.");
  await(rMember.addRole(gRole.id));

  message.channel.send(`<@${rMember.id}> have been given the ${gRole.name} role.`);
}
module.exports.help = {
  name: "addrole"
}
