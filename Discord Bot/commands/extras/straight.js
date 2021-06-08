const Discord = require('discord.js')

module.exports = {
    name: "howstraight",
    aliases: ["straight"],
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "a howstraight command",

    execute(client, message, args, Discord) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const howstraightembed = new Discord.MessageEmbed()
        .setTitle(`Straight Machine Calculator`)
        .setDescription(`${member.username} is ` + rng + "% Straight 🤖")
        .setColor("GREEN")

        message.channel.send(howstraightembed);
    }
}