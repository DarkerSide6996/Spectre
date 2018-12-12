const Discord = require("discord.js");
colour = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let msgping1 = new Date();

    let botping = new Date() - message.createdAt;

    let msgping2 = new Date() - msgping1;

    let embed = new Discord.RichEmbed()
    .setTitle("Pong!")
    .setColor(colour.blue)
    .addField('API Ping : ', Math.floor(bot.ping) + 'ms')
    .addField('Bot Ping : ', Math.floor(botping) + 'ms')
    .addField('Message Ping : ', '~' + Math.round(msgping2) + 'ms')
    .setTimestamp(new Date())
    .setFooter(`Bot ID: ${bot.user.id}`);

    message.channel.send(embed);

}

module.exports.help = {
  name: "ping"
}