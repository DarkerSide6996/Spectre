const Discord = require("discord.js");
const colour = require("../botconfig.json");
const apikey = require("../apikeys.json");
const client = require("fortnite");
const ft = new client(apikey.fortnite);

module.exports.run = async (bot, message, args) => {

    let username = args.slice(1).join(" ");
    let platform = args[0];
    if(!platform) return message.reply("Please enter your platfrom: `xbl = Xbox / ps = Playstation / pc = PC`").then(message.channel.send("**Usage: <Prefix>fortnite [platform] [username]**"));
    if(!username) return message.reply ("Please enter the username of the profile you want to view").then(message.channel.send("**Usage: <Prefix>fortnite [platform] [username]**"));

    let data = ft.user(username, platform).then(data => {
        let stats = data.stats;
        let lifetime = stats.lifetime;
        console.log(lifetime);

        let score = lifetime[6] [`Score`];
        let mplayed = lifetime[7] [`Matches Played`];
        let wins = lifetime[8] [`Wins`];
        let winp = lifetime[9] [`Win%`];
        let kills = lifetime[10] [`Kills`];
        let kd = lifetime[11] [`K/d`];
        let loss = Math.floor(mplayed - wins);

        let embed = new Discord.RichEmbed()
        .setTitle(data.username)
        .setAuthor("Fortnite Stats")
        .setColor(colour.blurple)
        .addField("Score", score, true)
        .addField("Wins", wins, true)
        .addField("Loss", loss, true)
        .addField("Win %", winp, true)
        .addField("Kills", kills, true)
        .addField("K/D", kd, true)
        .setTimestamp(new Date())
        .setFooter(`Bot ID: ${bot.user.id}`);

        message.channel.send(embed)

    }).catch(err => {
        message.reply("User can not be found")
    })

}

module.exports.help = {
    name: "fortnite"
}