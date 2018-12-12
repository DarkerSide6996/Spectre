const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

let hugu = message.mentions.users.first() || message.author;
if(hugu === message.author) return message.channel.send(`awwwww... :relaxed: Thank you ${message.author} for the hug`)

message.channel.send(`** :hugging: ${message.author} gave you a nice warm hug ${hugu} :hugging: **`)

}

module.exports.help = {
    name: "hug"
}