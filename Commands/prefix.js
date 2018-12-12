const Discord = require("Discord.js")
const fs = require("fs");
colour = require("../botconfig.json");

module.exports.run = async (bot, message, args, ops) => {

  if(!message.member.hasPermission("MANAGE_SERVER")) return errors.noPerms(message, "Manage server");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  message.channel.send("The prefix for this guild is `" + args[0] + "`")
  message.channel.send("The prefix can be shown anytime by mentioning me")

}

module.exports.help = {
    name: "prefix"
}
