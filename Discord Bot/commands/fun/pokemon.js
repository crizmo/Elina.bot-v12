const { MessageEmbed } = require("discord.js");
const { Spawn } = require("pokecord");
 
module.exports = {
    name: "pokemon",
    aliases: ['pk'],
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "pokemon",

    async execute(client, message,  args){
        if(message.author.bot) return
        const channel = message.guild.channels.cache.find(c=>c.name==='pokemon')
        if(message.channel === channel) {
 
            const pokemon = await Spawn().catch(e => {});
            if (!pokemon) return message.channel.send("Opps! Something went wrong :(");
            const filter = m => m.author.id === message.author.id;
        
            const embed = new MessageEmbed()
                .setAuthor("Guess the pokemon")
                .setColor("#FFFF00")
                .setImage(pokemon.imageURL);
            
            await message.channel.send(embed);
        
            message.channel.awaitMessages(filter, {
                max: 1,
                error: ["time"],
                time: 15000
            })
            .then(collected => {
                const m = collected.first();
                if (!m.content || m.content.toLowerCase() !== pokemon.name.toLowerCase()) return message.channel.send(`❌ | Incorrect guess! The answer was **${pokemon.name}**.`);
                return message.channel.send(`✅ | Correct guess!`);
            })
            .catch(() => {
                message.channel.send(`❌ | You did not answer in time. The correct answer was **${pokemon.name}**!`);
            });
        }
        else {
            message.channel.send("Use the command in ``#pokemon`` channel")
        }
}
};