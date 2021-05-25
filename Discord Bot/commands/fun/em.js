module.exports = {
    name: "em",
    aliases: ['em', 'emergiency meeting'],
    permissions: ["SEND_MESSAGES"],
    description: "emergency meetings command",
    usage: `=em`,
    permissions: ["SEND_MESSAGES"],

    execute(client, message, args, Discord) {
        emlinks = ['https://media1.tenor.com/images/3f889a25a2351c79f619aca6e70019f6/tenor.gif?itemid=18648761',]
        emmessage = ['Who do you think is sus?']    
        
        const randomNum = Math.floor(Math.random() * Math.floor(emmessage.length))
        let member = message.mentions.members.first();

        if(member){
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTitle(`${message.author.username} called a meeting on ${member.displayName} !`)
                .setDescription(emmessage[randomNum])
                .setImage(emlinks[randomNum])
            message.channel.send(firstEmbed);
        }else{
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setDescription(`${message.author.username} has started a meeting , Discuss who you think is the imposter`)
                .setImage(emlinks[randomNum])
            message.channel.send(firstEmbed);

        }
        
    }
}