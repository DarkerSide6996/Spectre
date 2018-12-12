const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
colour = require("../botconfig.json");
let date = require('date-and-time');

module.exports.run = async (bot, message, args) => {

    let icon = bot.user.displayAvatarURL;

    let embed = new Discord.RichEmbed()
    .setTitle("Bot Servers")
    .setThumbnail(icon)
    .setColor(colour.blue)
    .addField("Servers:", `Spectre is in ${bot.guilds.size} servers!`);

    message.channel.send(embed);

}

module.exports.help = {
  name: "botservers"
}
