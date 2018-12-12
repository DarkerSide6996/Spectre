const Discord = require("discord.js");
const fs = require("fs");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "Manage roles");
    if(!args[0]) return message.channel.send("Please enter a role name.")
    let aRole = message.guild.roles.find(r => r.name === args[0]);
    console.log(aRole)
    if(!aRole) return message.reply("Couldn't find role.");

    let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));

    if(!autorole[message.guild.id]){
        autorole[message.guild.id] ={
            role: aRole.id
        };
    };

    fs.writeFile("./autorole.json", JSON.stringify(autorole), (err) => {
        if (err) console.log(err)
      });

    if(autorole[message.guild.id]) return message.channel.send(`Auto role has been set to ${aRole} successfully`);

}

module.exports.help = {
    name: "autorole"
}