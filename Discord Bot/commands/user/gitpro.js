const discord = require("discord.js");
const client = new discord.Client();
const discordButtons = require("discord-buttons-plugin");
const { MessageEmbed } = require('discord.js');
const buttonClient = new discordButtons(client)

module.exports = {
    name: "gitpro",
    cooldown: 5,
    permissions: ["SEND_MESSAGES"],
    description: "Github profile info",

    execute(client, message, args, Discord) {

        let member = message.mentions.users.first() || message.author

        let name = args[0]
        let gitprofile = (`https://github-readme-stats.vercel.app/api?username=${name}&theme=radical&show_icons=true&hide_border=true`)

        const error = new Discord.MessageEmbed() 
        .setColor('RANDOM')
        .setTitle('**❌ERROR INVALID ARGS**')
        .setDescription('`Invalid username`')

        if(!name) return message.channel.send(error)

        const embed = new discord.MessageEmbed()
        .setTitle("‎‎Github profile")
        .setDescription("Click on the button below to check their github profile")
        .setImage(`https://github-readme-stats.vercel.app/api?username=${name}&theme=radical&show_icons=true&hide_border=true.gif`)
        .setTimestamp(new Date)
        .setFooter(message.author.username, message.author.displayAvatarURL({ format: "png", dynamic: true, size: 64 }))
        .setColor("#FFDBE9");

        const button1 = new buttonClient.MessageButton()
        .setLabel("Github Profile")
        .setURL(`https://github-readme-stats.vercel.app/api?username=${name}&theme=radical&show_icons=true&hide_border=true`)

        buttonClient.send(null, { channel: message.channel.id, embed, buttons: [ [button1] ]})
    }
}