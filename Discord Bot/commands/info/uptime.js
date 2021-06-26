const Discord = require('discord.js')

module.exports = {
    name: "uptime",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "bot uptime",

    async execute(client, message,  args){
        const embed = new Discord.MessageEmbed()

        .setTitle(`**$Elina bot uptime**`)
        .setColor("RED")
        .setFooter(`My uptime is \`${ms(this.client.uptime, { long: true })}\``)

        message.channel.send(embed)
    }
}
