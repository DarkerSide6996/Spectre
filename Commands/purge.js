const Discord = require("discord.js");
const errors = require("../utils/errors.js");
colour = require("../botconfig.json");

module.exports.run = async (bot, message, args, ops) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "Manage messages");

  let dMes = args[0]; 

  if (!args[0]) return message.channel.send('You must specify a number of messages.');
  if (args[0] < 1) return message.channel.send('Please provide a number greater than 1.');
  if (isNaN(args[0])) return message.channel.send('Please provide a correct number.');
  if(!args[0]) return message.channel.send("Please input the amount of messages you want to delete.");
  
  if(dMes > 100){
    while (dMes > 100)
    message.channel.bulkDelete(100).then(() =>{
      message.channel.send(pEmbed).then(msg => msg.delete(5000))
    })
    let dMes = Math.abs(dMes - 100);
  }
  
  message.channel.bulkDelete(args[0]).then(() =>{
    message.channel.send(dEmbed).then(msg => msg.delete(5000))
  })

  let pEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.username}`)
  .setColor(colour.red)
  .addField("Ammount of purge messages.", args[0])
  .setTimestamp(new Date())
  .setFooter(`Bot ID: ${bot.user.id}`);

  let dEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.username}`)
  .setColor(colour.red)
  .addField("Ammount of purge messages.", dMes)
  .setTimestamp(new Date())
  .setFooter(`Bot ID: ${bot.user.id}`);

}

module.exports.help = {
  name: "purge"
}
