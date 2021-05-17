module.exports = {
    name: 'rules',
    permissions: ["ADMINISTRATOR"],
    description: "Embeds!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('RULES')
        .setURL('DISCORD SERVER LINK')
        .setDescription('Server rules')
        .addFields(
            {name: 'Rule 1', value: "Do not advertise in the server, or to anyone in private messages."},
            {name: 'Rule 2', value: "Do not cause spam or flood in any way or form."},
            {name: 'Rule 3', value: "Do not argue with anyone in public chat. If necessary, take it to dms."},
            {name: 'Rule 4', value: "Take drama in dms or #『drama』"},
            {name: 'Rule 5', value: "Don't ping administrators unless necessary."},
            {name: 'Rule 6', value: "Do not impersonate any bot, or staff members."},
            {name: 'Rule 7', value: "Do not attempt to bypass punishments or use alt accounts for giveaways."},
            {name: 'Rule 8', value: "Do not attempt to purposely interfere with moderators' work: do not troll them, etc."},
            {name: 'Rule 9', value: "Misusing spoilers is seen as spam and you will be punished for it."},
            {name: 'Rule 10', value: "Follow any rules added in a channel's pinned messages."},
            {name: 'Rule 11', value: "No sensitive topics , This includes, but not limited to: suicide, shootings, and other."},
            {name: 'Rule 12', value: "Nsfw is not allowed, this includes images, gifs, emotes. Hate talk against others & groups of people is not allowed"},
            {name: 'Rule 13', value: "Dont act like a dumb child{ RETARD } spamming and doing some worthless shit"},
            {name: '‎', value: "‎"}

            
        )
        .setThumbnail("YOUR SERVER PFP LINK")
        .setImage('https://cdn.discordapp.com/attachments/809634098880446479/843022857986244618/unknown.png')
        .setFooter('NOTE: Not following the rules might get you kicked or even banned , so follow the server rules. Enjoy your stay :D');

        message.channel.send(newEmbed);
    }
}
