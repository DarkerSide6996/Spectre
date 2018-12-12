const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.author.id === message.guild.ownerID) return message.reply("Sorry but only the owner of the guild can use this command")

}

module.exports.help = {
    name: "test"
}