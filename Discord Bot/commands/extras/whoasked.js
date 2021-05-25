module.exports = {
    name: "whoasked",
    permissions: ["SEND_MESSAGES"],
    description: "test command",

    execute(client, message, args, Discord) {
        const whoasked = new Discord.MessageEmbed()
        .setDescription(`Now playing: 
        Who Asked (Feat. Nobody Did)
        ──────────────⚪
        ◄◄⠀▐▐⠀►► 3:56 / 𝟹:𝟻𝟼⠀───○ 🔊`);
        
        message.channel.send(whoasked);
        message.delete()
    }
}