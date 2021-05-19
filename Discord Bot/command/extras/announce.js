module.exports = {
    name: 'announcement',
    aliases: ['announce'],
    permissions: ["ADMINISTRATOR"],
    description: "Embeds!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('')
        .setURL('https://discord.gg/Ecy6WpEZsD')
        .setDescription('')
        .addFields(
            {name: '',value: ""},
        )
        .setThumbnail("")
        .setImage('')
        .setFooter('');

        message.channel.send(newEmbed);
    }
}
