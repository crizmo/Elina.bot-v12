const profileModel = require("../../models/profileSchema");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'search',
    cooldown: 5,
    aliases: ['search'],
    permissions: ["SEND_MESSAGES"],
    description: "search command",

    async execute (client, message, args, Discord, profileData) {
        areas = ['House', 'Discord', 'Zoo', 'Land', 'Toystore', 'Tree', 'Air', 'Bag', 'Wallet', 'Garden']

        const randomNumber = Math.floor(Math.random() * 500) + 1; 
        const randomareas = Math.floor(Math.random() * Math.floor(areas.length))

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
        .setDescription(`${message.author.username} searched and got ${randomNumber} ¥`)
        .setFooter("Location searched: "+ areas[randomareas])
        .setColor("RANDOM")
        .setImage("https://im7.ezgif.com/tmp/ezgif-7-f7ffa8f72142.gif");
        message.channel.send(embed);
}
}