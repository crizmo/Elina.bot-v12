module.exports = {
    name: 'kick',
    permissions: ["ADMINISTRATOR"],
    description: "description of kick command!",
    execute(client, message, args, Discord){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send('You couldnt kick the member');
        }
    }
}