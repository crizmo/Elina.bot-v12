
module.exports = {
    name: "spit",
    description: "spit",
    usage: `=spit (@user)`,
    permissions: ["SEND_MESSAGES"],
    cooldown: 5;
    aliases: [],

    execute(client, message, args, Discord) {
        spitLinks = [ 'https://media.tenor.com/images/607dac78c58fe20d15db3e8ab303ac70/tenor.gif',
                    'https://media.tenor.com/images/607dac78c58fe20d15db3e8ab303ac70/tenor.gif' ]

        const randomNum = Math.floor(Math.random() * Math.floor(spitLinks.length))
        let member = message.mentions.members.first();

        if(member){
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTitle(`${message.author.username} spat on ${member.displayName}`)
                .setTimestamp()
                .setImage(spitLinks[randomNum])
            message.channel.send(firstEmbed);
        }else{
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTimestamp()
                .setImage(spitLinks[randomNum])
            message.channel.send(firstEmbed);

        }
        
    }
}
