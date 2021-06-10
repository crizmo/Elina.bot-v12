Fill the "" as u want

module.exports = {
    name: 'announce',
    permissions: ["ADMINISTRATOR"],
    description: "Embeds!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00FFFF')
        .setTitle('')
        .setURL('')
        .setDescription('')
        .addFields(
            {name: '', value: ""},

        )
        .setThumbnail("")
        .setImage('')
        .setFooter('');

        message.channel.send(newEmbed);
        message.delete()
    }
}
