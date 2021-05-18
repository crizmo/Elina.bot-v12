module.exports = {
    name: "spank",
    description: "spank",
    usage: `=spank (@user)`,
    permissions: ["SEND_MESSAGES"],
    aliases: [],

    execute(client, message, args, Discord) {
        spankLinks = [ 'https://tenor.com/view/bad-beat-spank-punishment-gif-13569259',
        'https://tenor.com/view/kimetsu-no-yaiba-anime-happy-cute-slap-gif-16160761',
        'https://tenor.com/view/taritari-anime-spank-out-gif-13665166',
        'https://tenor.com/view/anime-spank-ouch-pain-cry-gif-16173937',
        'https://tenor.com/view/bad-spank-cry-anime-gif-15905904',
        'https://tenor.com/view/anime-spanking-spank-schoolgirl-naughty-gif-16082139' ]

        const randomNum = Math.floor(Math.random() * Math.floor(spankLinks.length))
        let member = message.mentions.members.first();

        if(member){
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTitle(`${message.author.username} spanked ${member.displayName} !`)
                .setTimestamp()
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
