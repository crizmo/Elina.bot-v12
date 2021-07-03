const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "poll",
    permissions: ["ADMINISTRATOR"],
    description: "starts a poll",

    async execute (bot, message, args, Discord) {
        let channelID = message.mentions.channels.first()
        let theDescription = args.slice(1).join(" ")

        if(!channelID) return message.reply("Please specify a channel you want the poll to be in!")
        if(!theDescription) return message.reply("Please specify a description/question for the poll!")

        const embed = new MessageEmbed()
        .setColor("YELLOW")
        .setTitle("Poll")
        .setDescription(theDescription)
        .setFooter("Poll created by: "+ message.author.username +'#'+ message.author.discriminator) //optional

        let msgEmbed = await channelID.send(embed)
        await msgEmbed.react('✅') //👎👍
        await msgEmbed.react('❌')
    }
}