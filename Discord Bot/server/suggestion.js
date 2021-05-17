#First you will need to make a channel called #suggestins in your server 
#To suggest you have to do =suggest {suggestion}

module.exports = {
    name: 'suggestions',
    permissions: ["SEND_MESSAGES"],
    aliases: ['suggest'],
    description: 'creates a suggestion!',
    execute(client, message, args, Discord, cmd){
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if(!channel) return message.channel.send('suggestions channel does not exist!');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}
