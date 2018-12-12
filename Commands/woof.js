const Discord = require("discord.js");
const superagent = require("superagent")
colour = require("../botconfig.json");

module.exports.run = async (bot,message,agrs) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`)

  let woofEmbed = new Discord.RichEmbed()
  .setColor(colour.blue)
  .setImage(body.url);

  message.channel.send(woofEmbed);

}

module.exports.help = {
  name: "woof"
}
