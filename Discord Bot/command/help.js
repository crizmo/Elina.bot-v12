const pagination = require('discord.js-pagination');

module.exports = {
    name: "help",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "The help command, what do you expect?",

    execute(client, message, args, Discord){

        const helpcommand = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Elina bot')
        .setURL('https://discord.gg/Ecy6WpEZsD')
        .setDescription('Help command')
        .addFields(
            {name: 'Hey there',value: "I am Elina! Nice to meet you. There are many command that you can use in me to remove bordem or to have fun with your friends. React ⏪ or ⏩ to check the commands. If you have any suggestions join the support server - discord.gg/drunkbetch"},
        )
        .setThumbnail("https://images-ext-1.discordapp.net/external/c5CBhORoCrjcKjUviyBSUYjatGWz7iiNPnl_HjNDg0E/%3Fsize%3D128/https/cdn.discordapp.com/icons/782646778347388959/a_1dc3d36a0f29ae80c960dc568588c835.gif")
        .setImage('https://media1.tenor.com/images/155d024b04fe25f967eeef21adc5e4f0/tenor.gif')
        .setFooter('Arigato, Hope you all have a wonderful day')
        .setTimestamp()
        
#you can edit this part its basically a small intro of the bot

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation 🎒')
        .addField('`=rules`', 'To check the rules')
        .addField('`=frrules`', 'To check the rules')
        .addField('`=servershop`', 'admin command')
        .addField('`=kick`', 'Kicks a member from your server via mention or ID')
        .addField('`=ban`', 'Bans a member from your server via mention or ID')
        .addField('`=clear`', 'Purges messages')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun 🎭')
        .addField('`=ttt`', 'To play tictactoe against AI')
        .addField('`=image`', 'Generates the required image')
        .addField('`=math`', 'To solve basics maths')
        .addField('`=8ball`', 'To play 8ball | =8ball Is Elina sus?')
        .addField('`=rps`', 'To play rps | =rps rock / paper / scissors')
        .addField('`=coinflip`', 'To do a coinflip | =coinflip')
        .addField('`=eject`', 'To eject a use | =eject @user')
        .addField('`=em`', 'To start a emergiency meeting')
        .setTimestamp()

        const serverinfo = new Discord.MessageEmbed()
        .setTitle('Server 👑')
        .addField('`=rules`', 'To check the rules')
        .addField('`=ping`', 'Get the bot\'s API ping')
        .addField('`=weather`', 'Checks weather forecast for provided location')
        .addField('`=suggestions`', 'To add suggestions | =suggest {suggestion}')
        .addField('`=serverinfo`', 'To get basic server info')
        .setTimestamp()

        const affection = new Discord.MessageEmbed()
        .setTitle('Affection 🎎')
        .addField('`=kiss`', 'To kiss a user | =kiss @user')
        .addField('`=hug`', 'To hug a user | =hug @user')
        .addField('`=slap`', 'To slap a user | =slap @user')
        .addField('`=boop`', 'To boop a user | =boop @user')
        .addField('`=kill`', 'To kill a user | =kill @user')
        .addField('`=pat`', 'To pat a user | =pat @user')
        .addField('`=spank`', 'To spank a user | =spank @user')
        .setTimestamp()

        const extras = new Discord.MessageEmbed()
        .setTitle('Extras 🎀')
        .addField('`=avatar`', 'To get users avatar')
        .addField('`=reactionrole`', 'Reaction roles command')
        .addField('`=help`', 'Help command')
        .addField('`=whoasked`', 'who asked command')
        .addField('`=embed`', 'To create your own embed')
        .setTimestamp()

        const pages = [
                helpcommand,
                moderation,
                fun,
                serverinfo,
                affection,
                extras
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}
