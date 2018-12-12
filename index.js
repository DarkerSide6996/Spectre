const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let coins = require("./coins.json");
let xp = require("./xp.json");
let prefixes = require("./prefixes.json");
let cooldown = new Set();
let cdseconds = 5;
let wchannel = require("./wchannel.json");
let gchannel = require("./gchannel.json");
let lchannel = require("./lchannel.json");
let permnick = require("./permnick.json");
let autorole = require("./autorole.json");
colour = require("./botconfig.json");

fs.readdir("./Commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.lenght <= 0){
    console.log("Couldn't find commands.");
    return;

  }

  jsfile.forEach((f, i) =>{
    let props = require(`./Commands/${f}`);
    console.log(`${f} loaded!`)
    bot.commands.set(props.help.name, props);
  });

})

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online in ${bot.guilds.size} servers!`);
  bot.user.setActivity("Type !help for a list of commands", {type: "PLAYING"});
});

bot.on("guildMemberAdd", member => {
  if(wchannel[member.guild.id])
  wchannelc = member.guild.channels.find(ch => ch.id === wchannel[member.guild.id].wchannel);
  wchannelc.send(`${member} has joined the server!`)

  if(lchannel[member.guild.id])
  wlchannelc = member.guild.channels.find(ch => ch.id === lchannel[member.guild.id].lchannel);
  wlembed = new Discord.RichEmbed()
  .setAuthor(`${member.user.username} Joined`, `${member.user.displayAvatarURL}`)
  .setColor(colour.green)
  .setThumbnail(`${member.user.displayAvatarURL}`)
  .setDescription(`**${member.user.tag} has joined the server!**`)
  .setTimestamp(new Date())
  .setFooter(`User ID: ${member.user.id}`);
  wlchannelc.send(wlembed);

});

bot.on("guildMemberAdd", member => {
  arole = member.guild.roles.find(r => r.id === autorole[member.guild.id].role);
  if(!role) return;
  member.addRole(arole);

});

bot.on("guildMemberRemove", member => {
  gchannelc = member.guild.channels.find(ch => ch.id === gchannel[member.guild.id].gchannel);
  if(!gchannelc) return;
  gchannelc.send(`${member} has left the server!`);

  glchannelc = member.guild.channels.find(ch => ch.id === lchannel[member.guild.id].lchannel);
  if(!glchannelc) return;
  glembed = new Discord.RichEmbed()
  .setAuthor(`${member.user.username} Left`, `${member.user.displayAvatarURL}`)
  .setColor(colour.orange)
  .setThumbnail(`${member.user.displayAvatarURL}`)
  .setDescription(`${member.user.tag} has left the server!`)
  .setFooter(`User ID: ${member.user.id} • ${sdate}`);
  glchannelc.send(glembed);

  member.user.send("https://discord.gg/EtjvBtQ")

});

bot.on("channelCreate", async channel => {

  if(!lchannel[channel.guild.id]){ return;
  }else{
  clchannelc = channel.guild.channels.find(ch => ch.id === lchannel[member.guild.id].lchannel);
  clembed = new Discord.RichEmbed()
  .setAuthor(`Channel created.`)
  .setColor(colour.green)
  .setDescription(`${channel.name} was created.`)
  .setFooter(`Channel ID: ${channel.id} • ${sdate}`);
  clchannelc.send(clembed);
  }
});

bot.on("channelDelete", async channel => {

  if(lchannel[channel.guild.id])
  dlchannelc = channel.guild.channels.find(ch => ch.id === lchannel[member.guild.id].lchannel);
  dlembed = new Discord.RichEmbed()
  .setAuthor(`Channel deleted.`)
  .setColor(colour.red)
  .setDescription(`**${channel.name}** was deleted.`)
  .setFooter(`Channel ID: ${channel.id} • ${sdate}`);
  clchannelc.send(dlembed);
  return;
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(!permnick[message.guild.id]) return;

  if(permnick[message.guild.id].bool === "false") return;
  if(message.author.id === permnick[message.guild.id].permnickuser){
    if(message.author.username || message.author.nickname === permnick[message.guild.id].permnick){
    message.member.setNickname(permnick[message.guild.id].permnick, `${message.member.username} has been set to ${permnick[message.guild.id].permnick} because of the command **permnick**.`)};
  };

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  if(message.isMentioned(bot.user)) return message.channel.send("**The prefix is** `" + prefixes[message.guild.id].prefixes + "`");

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  };

  let coinAmt = Math.floor(Math.random() * 20) + 1;
  let baseAmt = Math.floor(Math.random() * 20) + 1;

  if (coinAmt === baseAmt) {
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
    setTimeout(function() {
      }, 500);
    fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
      if (err) console.log(err)
    });
    let coinEmbed = new Discord.RichEmbed()
    .setTitle("Coins", message.author.avatar)
    .setColor(colour.yellow)
    .addField(`${message.author.tag}`, ` 💰 ${coinAmt} coins added! 💰 `);

    message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }

  let xpAdd = Math.floor(Math.random() * 7) + 8;

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  };

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level + (300 * curlvl);
  xp[message.author.id].xp = curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){

    let lvlicon = (`https://i.imgur.com/F2m1jAV.png`)
    let lvlEmbed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`)
    .setTitle("Level Up!")
    .setThumbnail(lvlicon)
    .setColor(colour.blue)
    .addField("Level:", `You are now level ${curlvl + 1}`);

    xp[message.author.id].level = xp[message.author.id].level + 1;
    xp[message.author.id].xp = 0;

    setTimeout(function() {
      return message.channel.send(lvlEmbed).then(msg => {msg.delete(5000)});
    }, 1500);
  }

  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });

  let prefix = prefixes[message.guild.id].prefixes;

  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("You have to wait 5 seconds between commands.")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args)

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

  message.channel.stopTyping(true);

});

bot.login(tokenfile.token);
