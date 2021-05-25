const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "whois",
    permissions: ["SEND_MESSAGES"],
    cooldown: 2,
    description: "user info command",

    execute (client, message, args, Discord) {
        const { guild, channel } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)

        let person = message.mentions.users.first() || message.author
        let avatar = person.displayAvatarURL({dynamic: true, size: 1024})

        console.log(member)

        const embed = new MessageEmbed()
        .setAuthor(`User info for ${user.username}`, user.displayAvatarURL())
        .addFields(
            {
            name: 'User tag',
            value: user.tag,
            },
            {
            name: 'Is bot',
            value: user.bot,
            },
            {
            name: 'Nickname',
            value: member.nickname || 'None',
            },
            {
            name: 'Joined Server',
            value: new Date(member.joinedTimestamp).toLocaleDateString(),
            },
            {
            name: 'Joined Discord',
            value: new Date(user.createdTimestamp).toLocaleDateString(),
            },
            {
            name: 'Roles',
            value: member.roles.cache.size - 1,
            }
            
        )
        .setThumbnail(avatar)

        channel.send(embed)
    }
}