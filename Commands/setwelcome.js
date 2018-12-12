const Discord = require("discord.js");
const fs = require("fs");
colour = require("../botconfig");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args, ops) => {

    if(!message.member.hasPermission("MANAGE_GUILD")) return errors.noPerms(message, "Manage server");
    
    let setup = new Discord.RichEmbed()
    .setTitle("Welcome config")
    .setColor(colour.green)
    .addField("Channel", "Set the welcome channel")
    .addField("Message", "Set the welcome message")
    .setTimestamp(new Date())
    .setFooter(`Bot ID: ${bot.user.id}`);

    message.channel.send(setup)

    const filter = m => m.author.id === message.author.id;

    message.channel.awaitMessages(filter, {
        max: 1,
        Time: 15000
    }).then(collected => { console.log(collected)
        
        if(collected.first().content === "Message"){

            message.channel.send("**Enter the message now. After 5 minutes you'll have to enter the command again to edit the message**")

            message.channel.awaitMessages(filter, {
                max: 1,
                Time: 15000
            }).then(collected => { console.log(collected)

                let cmessage = collected.first().content;
                let wchannel = JSON.parse(fs.readFileSync("./wchannel.json", "utf8"));

            });
                

        } else {

        if(collected.first().content === "Channel"){

            let wchannel = JSON.parse(fs.readFileSync("./wchannel.json", "utf8"));

            wchannel[message.guild.id] = {
            wchannel: message.channel.id
            };
    
            fs.writeFile("./Wchannel.json", JSON.stringify(wchannel), (err) => {
                if (err) console.log(err)
            });
    
            let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setTitle("Set welcome channel!")
            .setColor(colour.green)
            .addField("Welcome channel has been set to:", message.channel.name)
            .setTimestamp(new Date())
            .setFooter(`Bot ID: ${bot.user.id}`);
    
            message.channel.send(channel);
    
    }
    }
    });
}


module.exports.help = {
    name: "setwelcome"
  }
  