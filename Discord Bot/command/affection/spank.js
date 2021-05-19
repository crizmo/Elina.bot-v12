module.exports = {
    name: "spank",
    description: "spank",
    usage: `=spank (@user)`,
    permissions: ["SEND_MESSAGES"],
    aliases: [],

    execute(client, message, args, Discord) {
        spankLinks = [ '',
        '',
        '',
        '',
        '',
        '' ]

        const randomNum = Math.floor(Math.random() * Math.floor(spankLinks.length))
        let member = message.mentions.members.first();

        if(member){
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTitle(`${message.author.username} spanked ${member.displayName} 😳!`)
                .setImage(spankLinks[randomNum])
            message.channel.send(firstEmbed);
        }else{
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTimestamp()
                .setImage(spankLinks[randomNum])
            message.channel.send(firstEmbed);

        }
    }
}