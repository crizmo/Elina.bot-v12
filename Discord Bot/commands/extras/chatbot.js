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
            {name: 'Chat bot setup', value: "Elina's chat bot feature is one of the most epik commands. To setup the chat bot, First make a channel named #chatbot , just a reminder remember to give the bot required perms to send message in the channel or it wont work. Then start by saying hey . There you are ready to go."},

        )
        .setThumbnail("https://cdn.discordapp.com/avatars/842397001954230303/a38b9242e08e6c5694c3edecd0afc64a.webp?size=1024")
        .setFooter('Hope you enjoy the chat-bot command');

        message.channel.send(newEmbed);
    }
}

#Put this code in your main.js or index.js

client.on("message", async (message)=>{
    
    if(message.author.bot) return
    const channel = message.guild.channels.cache.find(c=>c.name==='chatbot','┊﹕chatbot')
    if(message.channel === channel) {
        fetch.default(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}`)
        .then(response => response.json())
        .then(data => {
            if (data.response) message.channel.send(data.response).catch(error)
        }).catch((error)=>{
            error;
        })
        .catch(() => {
            message.channel.send("Coundn't fetch response!");
        })
    }
})
