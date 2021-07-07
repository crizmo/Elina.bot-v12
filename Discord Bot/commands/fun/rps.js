const Discord = require('discord.js')
const djsGames = require('djs-games')
const RockPaperScissors = new djsGames.RockPaperScissors()

module.exports = {
    name: "rps",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "rock paper scissors",

    async execute(client, message,  args){
      RockPaperScissors.startGame(message)
      .catch(() => {
        message.channel.send("User dms were turned off!");
      })
    }
}