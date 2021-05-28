First npm i reconlx

const { hangman } = require('reconlx')

module.exports = {
    name : 'hangman',
    permissions: ["SEND_MESSAGES"],
    description: 'hangman command',
    execute (client, message, args, Discord) {
        if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send('You need manage messages permission.')
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.channel.send('Please specify a channel')
        const word = args.slice(1).join(" ")
        if(!word) return  message.channel.send('Please specify a word to guess.')

        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })

        hang.start();
        message.delete()
    }
}
