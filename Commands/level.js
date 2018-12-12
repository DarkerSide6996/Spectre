const Discord = require("discord.js");
let xp = require("../xp.json");
colour = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  let user = message.mentions.users.first() || message.author;

  if(!xp[user.id]){
    xp[user.id] = {
      xp: 0,
      level: 1
    };
  }

  let Xp = (`you have ${xp[user.id].xp} xp!`)
  let Level = (`you are level ${xp[user.id].level}!`)

  let xpEmbed = new Discord.RichEmbed()
  .setAuthor(user.tag, user.displayAvatarURL)
  .setColor(colour.blue)
  .addField("Level:", Level)
  .addField("XP:", Xp)
  .setTimestamp(new Date())
  .setFooter(`User ID: ${user.id}`);

  return message.channel.send(xpEmbed);

}

module.exports.help = {
  name: "level"
}
