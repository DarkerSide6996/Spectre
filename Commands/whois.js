const Discord = require("discord.js");
colour = require("../botconfig");
let date = require('date-and-time');

module.exports.run = async (bot, message, args, ops) => {

    let whois = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!whois) return message.reply("Couldn't find user.");

    let now = new Date();
    let sdate = (date.format(now, 'DD/MM/YYYY'));

    message.guild.members.find(user => user.id === whois.id)

    let jnow = new Date(message.guild.members.find(user => user.id === whois.id).joinedAt);
    let jdate = (date.format(jnow, 'DD/MM/YYYY HH:mm:ss'));

    let anow = new Date(whois.user.createdAt);
    let adate = (date.format(anow, 'DD/MM/YYYY HH:mm:ss'));

    let embed = new Discord.RichEmbed()
    .setAuthor(`${whois.user.tag}`, `${whois.user.displayAvatarURL}`)
    .setColor(colour.blue)
    .setThumbnail(whois.user.displayAvatarURL)
    .addField("Username:", `${whois.user.username}`)
    .addField("Discriminator:", `#${whois.user.discriminator}`)
    .addField("Account Created:", adate)
    .addField("Joined:", jdate)
    .setFooter(`Bot ID: ${bot.user.id} • ${sdate}`);

    message.channel.send(embed);

}

module.exports.help = {
    name: "whois"
  }