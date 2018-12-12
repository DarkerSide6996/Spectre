const Discord = require("discord.js");
colour = require("../botconfig.json");
let date = require('date-and-time');

module.exports.run = async (bot, message, args) => {

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kUser) return message.reply("Couldn't find user.");
    let kReason = args.join(" ").slice(22);
    if (!kReason) return message.reply("Please give a reason")
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have permission to kick members")
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked")
    if(kUser.id == message.author.id){
      message.channel.send("You can't ban yourslef.");
    };

    let now = new Date();
    let sdate = (date.format(now, 'DD/MM/YYYY'));

    let kicon = kUser.user.displayAvatarURL;

    let kickEmbed = new Discord.RichEmbed()
    .setTitle("Kick")
    .setThumbnail(kicon)
    .setColor("#00e600")
    .addField("Kicked User:", `${kUser} with ID: ${kUser.id}`)
    .addField("Kicked By:", `<@${message.author.id}> with ID: ${message.author.id}`)
    .addField("Kicked In:", message.channel)
    .addField("Time:", message.createdAt)
    .addField("Reason:", kReason)
    .setTimestamp(new Date())
    .setFooter(`Bot ID: ${bot.user.id}`);


    message.guild.member(kUser).kick(kReason);
    message.channel.send(kickEmbed);

}

module.exports.help = {
  name: "kick"
}
