module.exports = {
    name: 'announcement',
    aliases: ['announce'],
    permissions: ["ADMINISTRATOR"],
    description: "Embeds!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Game Event Announcement')
        .setURL('https://discord.gg/Ecy6WpEZsD')
        .setDescription('Drunkbetch game event 🎮')
        .addFields(
            {name: 'Hey Everyone',value: "So we were thinking about hosting a game event in the server but were unable to come on the conclusion of selecting a game that would fulfil our requirements. So i am asking your help to suggest us some games that can be played on mobile and pc and where cheating or score bypassing is not possible. If you know any game that satisfies these needs pls dm them to Criz."},
        )
        .setThumbnail("https://images-ext-1.discordapp.net/external/c5CBhORoCrjcKjUviyBSUYjatGWz7iiNPnl_HjNDg0E/%3Fsize%3D128/https/cdn.discordapp.com/icons/782646778347388959/a_1dc3d36a0f29ae80c960dc568588c835.gif")
        .setImage('https://media4.giphy.com/media/QOcbKpFWoHOSsfRH6K/giphy.gif')
        .setFooter('Arigato, Hope you all have a wonderful day');

        message.channel.send(newEmbed);
    }
}