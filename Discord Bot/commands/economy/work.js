const profileModel = require("../../models/profileSchema");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "work",
  aliases: ["work"],
  permissions: ["SEND_MESSAGES"],
  description: "work for coins",
  async execute(client, message, args, Discord, profileData) {
    workLinks = [ 'https://im3.ezgif.com/tmp/ezgif-3-57d3c082aac2.gif',
        'https://im3.ezgif.com/tmp/ezgif-3-5e67a202e41d.gif',
        'https://im3.ezgif.com/tmp/ezgif-3-28733b49c843.gif',
        'https://im3.ezgif.com/tmp/ezgif-3-57c8eb29aa6d.gif',
        'https://im3.ezgif.com/tmp/ezgif-3-2ed6a2e092e2.gif',
        'https://im3.ezgif.com/tmp/ezgif-3-20a4da166b2d.gif' ]

    const randomNum = Math.floor(Math.random() * Math.floor(workLinks.length))    
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: randomNumber,
        },
      }
    );
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author.username}, you worked and got ${randomNumber} **¥**`)
    .setImage(workLinks[randomNum])
    message.channel.send(embed)
  },
};