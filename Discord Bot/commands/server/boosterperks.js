module.exports = {
    name: 'boosterperks',
    permissions: ["ADMINISTRATOR"],
    description: "Embeds!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00FFFF')
        .setTitle('---------------Booster Perks---------------')
        .setURL('https://discord.gg/Ecy6WpEZsD')
        .setDescription('Boosters will get the following if they boos')
        .addFields(
            {name: '1st perk', value: "Custom role of your choice"},
            {name: '2nd perk', value: "Special offers in Servershop { 25% discount }"},
            {name: '3rd perk', value: "Unlocks private channel for booster-chat"},
            {name: '4th perk', value: "Boosters only giveaways"},

        )
        .setThumbnail("https://media1.tenor.com/images/c1ee5ae3e9db6a5a3536f4232e946155/tenor.gif?itemid=14289229")
        .setImage('https://media1.tenor.com/images/5e3178fe5185a1b1d475eb354785852c/tenor.gif?itemid=20316615')
        .setFooter('Boosters will automatically get @Server Booster role, Special offers will differ according the amount of times u have boosted the server');

        message.channel.send(newEmbed);
    }
}