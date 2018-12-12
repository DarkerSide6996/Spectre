const Discord = require("discord.js");
const fs = require("fs");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args, ops) => {

    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return errors.noPerms(message, "Manage nicknames");

    let nUser = message.mentions.users.first() || message.author;
    if (!nUser) return message.channel.send("Couldn't find user.");
  
    let permnick = JSON.parse(fs.readFileSync("./permnick.json", "utf8"));

    let setup = new Discord.RichEmbed()
    .setAuthor(nUser.tag, nUser.displayAvatarURL)
    .setTitle("Permnick config")
    .setColor(colour.green)
    .addField("Nickname", "Set the permnick for the user")
    .addField("Toggle", "Disable/Enable permnick for the user")
    .setTimestamp(new Date())
    .setFooter(`Bot ID: ${bot.user.id}`);

    message.channel.send(setup)

    const filter = m => m.author.id === message.author.id;

    message.channel.awaitMessages(filter, {
        max: 1,
        Time: 15000
    }).then(collected => {
        if(collected.first().content === "cancel") return message.channel.send("**Canceled**");

        if(collected.first().content === "Nickname"){

            message.channel.send("Enter the nickname now. After 5 minutes you'll have to enter the command again to set the nickname")

            message.channel.awaitMessages(filter, {
                max: 1,
                Time: 15000
            }).then(collected => {

                let nick = collected.first().content;
                
                permnick[message.guild.id] = {
                    permnickuser: nUser.id,
                    permnick: nick,
                    bool: "true"
                };
            
                fs.writeFile("./permnick.json", JSON.stringify(permnick), (err) => {
                    if (err) console.log(err)
                });
            
                message.channel.send(`${nUser.username} permant nickname has been set to **${nick }**`);

            });
                

        } else {

        if(collected.first().content === "Toggle"){

            if(permnick[message.guild.id].bool === "true"){
                permnick[message.guild.id].bool = "false"

                message.channel.send("Permnick has been turned off for this user")
            } else{
                if(permnick[message.guild.id].bool === "false")
                permnick[message.guild.id].bool = "true"

                message.channel.send("Permnick has been turned on for this user")
                };
            };
    
    }
    });
}

module.exports.help = {
    name: "permnick"
  }
