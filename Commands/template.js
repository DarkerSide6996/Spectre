const Discord = require("discord.js");
const fs = require("fs");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args, ops) => {

    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return errors.noPerms(message, "Manage nicknames");

    let nUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!nUser) return message.channel.send("Couldn't find user.");

    permnick = JSON.parse(fs.readFileSync("./permnick.json", "utf8"));

    permnick[message.guild.id] = {
        permnickuser: nUser.id,
    };

    fs.writeFile("./permnick.json", JSON.stringify(permnick), (err) => {
        if (err) console.log(err)
    });

    message.channel.send(`${nUser} permant nickname has been set to **${args[1]}**`);

}

module.exports.help = {
    name: "test"
}