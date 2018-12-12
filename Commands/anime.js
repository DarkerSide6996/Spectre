const Discord = require("discord.js");
const malScraper = require('mal-scraper');
colour = require("../botconfig.json");

module.exports.run = async (client, message, args) => {

  const search = `${args}`;

  malScraper.getInfoFromName(search)
    .then((data) => {
      if(!data) return;
      console.log(data)
      const malEmbed = new Discord.RichEmbed()
      .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor(colour.blue)
      .addField('English Title', data.englishTitle, true)
      .addField('Japanese Title', data.japaneseTitle, true)
      .addField('Type', data.type, true)
      .addField('Episodes', data.episodes, true)
      .addField('Rating', data.rating, true)
      .addField('Aired', data.aired, true)
      .addField('Score', data.score, true)
      .addField('Score Stats', data.scoreStats, true)
      .addField('Link', data.url)
      .setTimestamp(new Date())
      .setFooter(`Studio: ${data.studios}`)

      message.channel.send(malEmbed);

      //console.log(data);
    })
    .catch((err) => {
    message.channel.send("Sorry that anime couldn't be found")
    console.log(err)
    });




}

module.exports.help = {
  name: "anime"
}