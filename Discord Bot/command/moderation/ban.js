module.exports = {
    name: 'ban',
    permissions: ["ADMINISTRATOR"],
    description: "description of ban command!",
    execute(client, message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        }else{
            message.channel.send('Please mention a user who you want to ban');
        }
    }
}