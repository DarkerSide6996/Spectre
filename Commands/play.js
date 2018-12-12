const Discord = require("discord.js");
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {

if(!message.member.voiceChannel) return message.channel.send("Please join a voice channel first");
if(!message.member.voiceChannelID === message.guild.me.voiceChannelID) return message.channel.send("Sorry, I'm already in the voice channel `"+ `${message.guild.me.voiceChannel.name}` + "`");

let url = args[0];
if(!url) return message.reply("Please input a url following the command");

let validate = await ytdl.validateURL(url);
if(!validate) return message.reply("Please input a **valid** link from YouTube")

let info = await ytdl.getInfo(url);

let connection = await message.member.voiceChannel.join();

let dispatcher = await connection.playStream(ytdl(url, {filter: 'audioonly'}));

message.channel.send(`*Now playing:* ***${info.title}***`);

}

module.exports.help = {
    name: "play"
}