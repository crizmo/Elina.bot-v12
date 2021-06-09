First setup discord-buttons.js

const discord = require('discord.js')
const { MessageButton } = require("discord-buttons");

module.exports = {
    name: "elina",
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "buttons!",
    execute(client, message, args, Discord, cmd){

        const embed = new discord.MessageEmbed()
        .setTitle("Do you love me")
        .setColor("Blue")

        const yes = new MessageButton()
        .setStyle("green")
        .setLabel('Yes')
        .setID("good")

        const no = new MessageButton()
        .setStyle("red")
        .setLabel('No')
        .setID(":c")

        message.channel.send("Hey", {
            buttons: [yes, no],
            embed: embed
        })
    }
}
