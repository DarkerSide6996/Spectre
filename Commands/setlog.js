const Discord = require("discord.js");
const fs = require("fs");
colour = require("../botconfig");
let date = require('date-and-time');
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args, ops) => {

    if(!message.member.hasPermission("MANAGE_GUILD")) return errors.noPerms(message, "Manage server");

    let lchannel = JSON.parse(fs.readFileSync("./lchannel.json", "utf8"));

        lchannel[message.guild.id] = {
            lchannel: message.channel.id
        };

        fs.writeFile("./Lchannel.json", JSON.stringify(lchannel), (err) => {
            if (err) console.log(err)
        });

        let now = new Date();
        let sdate = (date.format(now, 'DD/MM/YYYY'));

        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Set log channel!")
        .setColor(colour.green)
        .addField("Log channel has been set to:", message.channel.name)
        .setFooter(`Channel ID: ${message.channel.id} • ${sdate}`);

    message.channel.send(embed);


}

module.exports.help = {
    name: "setlog"
  }