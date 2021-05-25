module.exports = {
    name: 'bee',
    permissions: ["ADMINISTRATOR"],
    description: "Embeds!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00FFFF')
        .setTitle('Imp notice')
        .setURL('https://discord.gg/Ecy6WpEZsD')
        .setDescription('Hi there')
        .addFields(
            {name: 'Bee', value: "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyways. Because bees don't care what humans think is impossible."},

        )
        .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/075e466a-c918-4c1f-bf1d-b2aa707c2cf4/ddw8pri-799f695d-ce39-4733-8fca-a3d453b3eff1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3NWU0NjZhLWM5MTgtNGMxZi1iZjFkLWIyYWE3MDdjMmNmNFwvZGR3OHByaS03OTlmNjk1ZC1jZTM5LTQ3MzMtOGZjYS1hM2Q0NTNiM2VmZjEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Ww4fQJLWif9CA66pr-Rvn4-SHuZ2BmKtUIjyql9u7uk")
        .setFooter('Lol get rekt');

        message.channel.send(newEmbed);
        message.delete()
    }
}