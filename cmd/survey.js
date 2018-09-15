//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const Discord = require('discord.js');


module.exports.run = async (r4dar, message, args) => {
  if (args == 0) return message.channel.send("You must ask a question in order to be able to open a questionnaire.")

  let embed = new Discord.RichEmbed()
  .setTitle(`Survey: ${args}`.split(',').join(' '))
  .setColor("#ffff00")
  .setDescription(`Survey started by ${message.author.username}`);

  return message.channel.send(embed).then(message.delete())

  .then(function (message, str) {
       message.react("✅")
       message.react("⛔")
     }).catch(function() {
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [ ],
  permLevel: 0
};

exports.help = {
  name: 'survey'
};
