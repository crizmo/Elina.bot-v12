module.exports = {
    name: 'frrules',
    permissions: ["ADMINISTRATOR"],
    description: "Embeds!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Face Reveal Channel Rules')
        .setURL('https://discord.gg/Ecy6WpEZsD')
        .setDescription('Rules to get access to face reveal channel')
        .addFields(
            {name: 'Rule 1', value: "Dm @Criz or @Staff Your Face Reveal picture "},
            {name: 'Rule 2', value: "They will download your pic then reverse image search or perform some other search on the internet in order to verify that you are not scamming"},
            {name: 'Rule 3', value: "They will then post your picture and pin the picture in the face-revealchannel"},
            {name: 'Rule 4', value: "You will finally be given @Face reveal  and access to the face-reveal channel"},
            {name: 'Rule 5', value: "Your Face Reveal will stay within the face-reveal channel and cannot be removed ever afterwards. It will stay there permanently unless you leave the server"},
            {name: '‎', value: "‎"}
               
        )
        .setThumbnail("https://cdn.discordapp.com/icons/782646778347388959/a_1dc3d36a0f29ae80c960dc568588c835.gif?size=128")
        .setFooter('NOTE: If any scamming is detected within dms a mute will be warranted but if any scamming is detected later on it will be a perma ban');

        message.channel.send(newEmbed);
    }
}