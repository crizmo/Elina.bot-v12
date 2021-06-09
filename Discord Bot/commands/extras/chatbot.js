Setup of chat bot and the main code is in main.js

module.exports = {
    name: 'chatbot',
    permissions: ["SEND_MESSAGES"],
    description: "Embeds!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00FFFF')
        .setTitle('Elina chat bot')
        .setURL('https://www.investopedia.com/terms/c/chatbot.asp')
        .setDescription('Hi there')
        .addFields(
            {name: 'Chat bot setup', value: "Elina's chat bot feature is one of the most epik commands. To setup the chat bot, First make a channel named #chatbot , just a reminder remember to give the bot require perms to send message in the channels or it wont work. Then start by saying hey . There you are ready to go."},

        )
        .setThumbnail("https://cdn.discordapp.com/avatars/842397001954230303/a38b9242e08e6c5694c3edecd0afc64a.webp?size=1024")
        .setFooter('Hope you enjot the chat-bot command');

        message.channel.send(newEmbed);
    }
}
