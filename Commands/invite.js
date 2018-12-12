const Discord = require("discord.js");
colour = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  let inviteEmbed = new Discord.RichEmbed()
  .setAuthor(`Spectre's invite link`, bot.user.displayAvatarURL)
  .setDescription("This bot is filled with rage and determination to become the best bot on discord. Spectre has a a lot of special features and will always keep upgrading its self to reach almost perfection!")
  .setTitle("Click Me!")
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor("#FF0000")
  .setURL(`https://discordapp.com/oauth2/authorize?client_id=467767660185387029&scope=bot&permissions=2146958591`)
  .setTimestamp(new Date())
  .setFooter(`Bot ID: ${bot.user.id}`);

  message.channel.send(inviteEmbed);

}

module.exports.help = {
  name: "invite"
}
