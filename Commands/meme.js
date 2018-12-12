const Discord = require("discord.js");
const superagent = require("superagent")
colour = require("../botconfig.json");

module.exports.run = async (bot,message,agrs) => {

  let {body} = await superagent
  .get(`https://api-to.get-a.life/meme`)

  let embed = new Discord.RichEmbed()
  .setColor(colour.blue)
  .setImage(body.url);

  message.channel.send(embed);

}

module.exports.help = {
  name: "meme"
}