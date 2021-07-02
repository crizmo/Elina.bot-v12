const discord = require('discord.js')
const { MessageButton } = require("discord-buttons");

module.exports = {
    name: "invite",
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "buttons!",
    execute(client, message, args, Discord, cmd){

        const embed = new discord.MessageEmbed()
        .setTitle("Elina bot invite link")
        .setColor("Blue")

        const yes = new MessageButton()
        .setStyle("green")
        .setLabel('Invite')
        .setID("invite")

        const no = new MessageButton()
        .setStyle("red")
        .setLabel('No Thanks :)')
        .setID("notainvite")

        message.channel.send(" ", {
            buttons: [yes, no],
            embed: embed
        })
    }
}