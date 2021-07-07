const Discord = require('discord.js')
const djsGames = require('djs-games')
const FastTyper = new djsGames.FastTyper()

module.exports = {
    name: "fasttyper",
    aliases: ['ft'],
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "fast typer",

    async execute(client, message,  args){
        FastTyper.startGame(message)
    }
}