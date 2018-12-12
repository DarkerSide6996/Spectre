const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args, ops) => {


    if(!message.member.hasPermission("MANAGE_MESSSAGES")) return errors.noPerms(message, "Manage messages");

    let umuser = message.mentions.members.first();
    if(!umuser) return message.reply("Couldn't find user. Usage: **!unmute @user**");

    let mrole = message.guild.roles.find(r => r.name === "Muted");

    if(!umuser.roles.has(mrole.id)) return;

    await(umuser.removeRole(mrole.id));
    message.channel.send(`${umuser} has been unmuted!`);

}

module.exports.help = {
    name: "unmute"
}

