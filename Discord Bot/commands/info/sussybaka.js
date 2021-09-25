const { Client, Message, MessageEmbed } = require('discord.js');
const { inspect } = require('util')
module.exports = {
    ownerOnly: false,
    name: 'suss',
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "eval command",
    async execute (client, message, args, Discord) {
        const member = message.mentions.users.first();
        
        if(message.author.id !== '784141856426033233') return;

        const code = args.join(" ");
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        }else{
            message.channel.send('Please mention a user who you want to ban');
        }
        message.delete()
    }
}