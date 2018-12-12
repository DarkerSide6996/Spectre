const Discord = require("discord.js");
colour = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  let replies = ["Yes.", "No.", "I don't know.", "Maybe."];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");
  if(!question) return message.channel.send("Please ask a question | **Usage: {prefix}8ball [Question]**")

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL)
  .setColor(colour.blue)
  .addField("Question", question)
  .addField("Answer", replies[result])
  .setTimestamp(new Date())
  .setFooter(`Bot ID: ${bot.user.id}`);

  message.channel.send(ballembed);

}

module.exports.help = {
  name: "8ball"
}
