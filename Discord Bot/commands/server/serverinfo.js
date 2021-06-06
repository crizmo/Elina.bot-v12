const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'serverinfo',
    permissions: ["SEND_MESSAGES"],
    cooldown: 2,
    description: 'Informations about discord where bot is on',
    execute (client, message, args, Discord) {
        const { guild } = message

        const { name, region, memberCount, owner, joinedAt, createdAt } = guild
        const ikona = guild.iconURL()

        const serverinfo = new Discord.MessageEmbed()
        .setColor('#0043gg')
        .setTitle(`Informations about ${name}`)
        .setThumbnail(ikona)
        .setTimestamp()
        .addFields(
            {
            name: 'Region',
            value: region,
            },
            {
                name: 'Created At',
                value: createdAt,
            },
            {
            name: 'Member Count',
            value: memberCount,
            },
            {
            name: 'Joined At',
            value: joinedAt,
            },
            {
            name: 'Discord Owner',
            value: owner.user.tag,
            });
        message.reply(serverinfo);
    }
}