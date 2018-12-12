const Discord = require("discord.js");
const tokenfile = require("../token.json");

module.exports.run = async (bot, message, args, ops) => {

    if(!message.author.id === "413771695774760967") return message.channel.send("Sorry only the DarkerSide#6996 can use this command")

    message.channel.send("**Restarting now...**")

    bot.destroy().then(bot.login(tokenfile.token))

    message.channel.send("**Restarted Successfully!**")

}

module.exports.help = {
    name: "restart"
}