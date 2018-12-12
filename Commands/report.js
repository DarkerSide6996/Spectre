const Discord = require("discord.js");
colour = require("../botconfig.json");
let date = require('date-and-time');

module.exports.run = async (bot, message, args, ops) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rReason = args.join(" ").slice(22);

    let now = new Date();
    let sdate = (date.format(now, 'DD/MM/YYYY'));

    let reportEmbed = new Discord.RichEmbed()
    .setTitle("Reports", message.guild.iconURL)
    .setColor(colour.orange)
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rReason)
    .setFooter(`Bot ID: ${bot.user.id} • ${sdate}`);

    message.delete().catch(O_o=>{});
    message.channel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
