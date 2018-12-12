const Discord = require("discord.js");
let date = require('date-and-time');
colour = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  let now = new Date();
  let sdate = (date.format(now, 'DD/MM/YYYY'));

  let Bnow = new Date(bot.user.createdAt);
  let Bdate = (date.format(Bnow, 'ddd MMM DD YYYY'));


  let bicon = bot.user.displayAvatarURL;

  let botembed = new Discord.RichEmbed()
  .setTitle("Bot Information")
  .setColor(colour.red)
  .setThumbnail(bicon)
  .addField("Created and Coded by:", "DarkerSide#6996")
  .addField("8 Bit Art by:", "DarkerSide#6996")
  .addField("Spectre Logo by:", "blop.#8835")
  .addField("Bot Name:", `${bot.user.username}`)
  .addField("Created On:", Bdate)
  .setFooter(`Owner: DarkerSide#6996 • Coded in Node.js • ${sdate}`);

  return message.channel.send(botembed);

}

module.exports.help = {
  name: "botinfo"
}
