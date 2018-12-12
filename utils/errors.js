const Discord = require("discord.js");
const fs = require("fs");
colour = require("../botconfig.json");

module.exports.noPerms = (message, perm) => {
    
    let noPerms = new Discord.RichEmbed()

    .setAuthor("No perms", message.author.displayAvatarURL)
    .setColor(colour.red)
    .addField("You have insufficient permissions:", perm);

    message.channel.send(noPerms)
}

module.exports.noBPerms = (message, perm) => {
    
    let noBPerms = new Discord.RichEmbed()

    .setAuthor("No perms", bot.user.displayAvatarURL)
    .setColor(colour.red)
    .addField("The bot has insufficient permissions:", perm);

    message.channel.send(noBPerms)
}
