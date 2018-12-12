const Discord = require("discord.js");
const superagent = require("superagent")
colour = require("../botconfig.json");

module.exports.run = async (bot,message,agrs) => {

  let {body} = await superagent
  .get(`http://aws.random.cat//meow`)

  let meowEmbed = new Discord.RichEmbed()
  .setColor(colour.blue)
  .setImage(body.file);

  message.channel.send(meowEmbed);

}

module.exports.help = {
  name: "meow"
}
