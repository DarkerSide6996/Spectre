const Discord = require("discord.js")
const ms = require("ms")
colour = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSSAGES")) return errors.noPerms(message, "Manage messages");

  let muser = message.mentions.members.first();
  if(!muser) return message.channel.send("Couldn't find user. Usage: **!mute @user <time> <reason>**");
  if(muser.hasPermission("MANAGE_MESSAGES", false, true, true)) return message.channel.send(`Sorry but ${muser} can not be muted`);
  let mtime = args[1];
  let mreason = args.slice(1).join(" ") || "No reason given";

  if(muser.bot === true) return message.channel.send("Sorry but you can not mute a bot")
  if(muser.roles.has(message.guild.roles.find(r => r.name === "Muted"))) return message.channel.send("Sorry but this user has already been muted or already doesn't have permisson to send messages");

  mrole = message.guild.roles.find(r => r.name === "Muted");
  if(!mrole){
    try{
      mrole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions: []
      })

      message.guild.channels.forEach(async (channel) => {
        await channel.overwritePermissions(mrole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        }, mreason)
        
      });

    }catch(e){
      console.log(e.stack);
    }
  }

  let position = bot.user.highestRole.position - 1;

  message.guild.setRolePosition(mrole, position);

  muser.addRole(mrole.id)
  await(muser.roles.has(mrole.id));
  if(!mtime) return;
  message.channel.send(`${muser} has been muted for ${ms(ms(mtime))}`)

  setTimeout(function(){

    await(muser.removeRole(mrole.id));
    message.channel.send(`${muser} has been unmuted!`);

    return;

  }, ms(mtime));

}

module.exports.help = {
  name: "mute"
}
