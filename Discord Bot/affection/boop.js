module.exports = {
    name: "pat",
    permissions: ["SEND_MESSAGES"],
    description: "send yourself or another user a pat",

    execute(client, message, args, Discord) {
        patLinks = [ 'https://cdn.discordapp.com/attachments/810026230089908256/843546732990169138/image0.gif',
        'https://cdn.discordapp.com/attachments/810026230089908256/843546733764935740/image2.jpg',
        'https://cdn.discordapp.com/attachments/810026230089908256/843546734209794109/image4.gif',
        'https://cdn.discordapp.com/attachments/810026230089908256/843546733341966356/image1.gif',
        'https://cdn.discordapp.com/attachments/810026230089908256/843546734734999573/image5.gif']

        const randomNum = Math.floor(Math.random() * Math.floor(patLinks.length))
        let member = message.mentions.members.first();

        if(member){
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTitle(`${message.author.username} pated ${member.displayName} !`)
                .setTimestamp()
                .setImage(patLinks[randomNum])
            message.channel.send(firstEmbed);
        }else{
            var firstEmbed = new Discord.MessageEmbed()
	            .setColor("RANDOM")
                .setTimestamp()
                .setImage(patLinks[randomNum])
            message.channel.send(firstEmbed);

        }
        
    }
}
