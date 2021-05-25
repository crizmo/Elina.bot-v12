module.exports = {
    name: 'announce',
    permissions: ["ADMINISTRATOR"],
    description: "Embeds!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00FFFF')
        .setTitle('Snake Game Competition')
        .setURL('https://discord.gg/Ecy6WpEZsD')
        .setDescription('DrunkBetch game competition')
        .addFields(
            {name: 'SnakeCord', value: "A new game kinda thingy idea, We were planning to host a competition , The command is =snakecord. This competition will be from 25th May to 30th May, To participate you should dm me a screen shot of the bot with your score. The person with the highest score gets a custom role."},

        )
        .setThumbnail("https://cdn.discordapp.com/attachments/782649389797081109/846670924970721280/unknown.png")
        .setImage('https://cdn.discordapp.com/attachments/846241507140436030/846669602054340608/unknown.png')
        .setFooter('Goodluck, Hope you have a great day');

        message.channel.send(newEmbed);
        message.delete()
    }
}