const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if(!message.guild.me.voiceChannel) return message.channel.send("Sorry, I'm not even connected to a voice channel right")
    if(!message.member.voiceChannelID === message.guild.me.voiceChannelID) return message.channel.send("Sorry, but only people in the voice channel `"+ `${message.guild.me.voiceChannel.name}` + "` can remove me from it");

    await message.guild.me.voiceChannel.leave();
    message.channel.send("**I have left the voice channel` " + message.guild.me.voiceChannel.name + "` successfully!**")

}

module.exports.help = {
    name: "leave"
}