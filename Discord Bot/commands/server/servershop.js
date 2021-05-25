module.exports = {
    name: 'servershop',
    permissions: ["SEND_MESSAGES"],
    description: "Embeds!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00FFFF')
        .setTitle('-------------------Server shop-------------------')
        .setURL('https://discord.gg/Ecy6WpEZsD')
        .setDescription('DrunkBetch Server Shop')
        .addFields(
            {name: '1st item- owo & dank', value: "Custom message by bot for 3 days -{50,000 owo coins & 100,000 Dank cash}"},
            {name: '2nd item- owo & dank', value: "Custom role for a week - {100,000 owo coins & 150,000 Dank Cash} "},
            {name: '3rd item- owo & dank', value: "One of your Emotes { 50,000 owo coins & 100,000 Dank Cash} "},
            {name: '4th item- owo & dank', value: "Custom reaction on a word for a week {50,000 OwO & 100,000 Dank cash}"},

        )
        .setThumbnail("https://cdn.discordapp.com/icons/782646778347388959/a_1dc3d36a0f29ae80c960dc568588c835.gif?size=128")
        .setImage('https://media.discordapp.net/attachments/782649549763379210/815912557708574730/server_info.gif')
        .setFooter('Ty , If you want to buy anything just dm me to Criz');

        message.channel.send(newEmbed);
    }
}