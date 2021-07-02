const Discord = require("discord.js");
const fetch = require("node-fetch")

module.exports = {
    name: "wyr",
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "would you rather",
    async execute(client, message, args, Discord, cmd){
 
     const res = await fetch(`https://api.popcatdev.repl.co/wyr`)
            .then(info => info.json()).then(ops => {

 
  const em = new Discord.MessageEmbed()
    .setTitle("Would You Rather")
    .setDescription(`:one: ${ops.ops1}\n\n   OR   \n\n:two: ${ops.ops2}`)
    .setColor("#4169e1")
  message.channel.send(em).then(wyrmessage => {
    wyrmessage.react('1️⃣')
    wyrmessage.react('2️⃣')
  })
      })

  }

}