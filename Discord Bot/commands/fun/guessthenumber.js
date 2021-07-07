const Discord = require('discord.js')
const djsGames = require('djs-games')
const guessTheNumber = new djsGames.GuessTheNumber()

module.exports = {
    name: "guess",
    aliases: ['gtn','guessthenumber'],
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "guess the number",

    async execute(client, message,  args){
        guessTheNumber.startGame(message)
    }
}