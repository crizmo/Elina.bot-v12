const pagination = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');
const { readdirSync } = require("fs");
const prefix = require("../../direct_help/help/config.json").prefix;
const emo = require("../../direct_help/help/emoji.json");
let color = "#00ccff";

module.exports = {
    name: "help",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "The help command, what do you expect?",

    execute(client, message, args, Discord){
        const user = message.mentions.users.first() || message.member.user

        const helpcommand = new Discord.MessageEmbed()
        .setColor('#FFDBE9')
        .setTitle('Elina bot')
        .setDescription('**If you need support, found bugs?** Join the support server')
        .setURL('https://discord.gg/Ecy6WpEZsD')
        .addFields(
            {name: 'Hey there',value: "I am Elina! Nice to meet you. There are many command that you can use in me to remove bordem or to have fun with your friends. React ⏪ or ⏩ to check the commands. If you have any suggestions join the support server - https://discord.gg/Ecy6WpEZsD"},
        )
        .setThumbnail("https://4.bp.blogspot.com/-tuiBJYtJ40o/XA-Gj2P_cBI/AAAAAAAKgyQ/bfgfrZj9xAEdml8k6zVYL9YHup9RBmPLwCLcBGAs/s1600/AW2606235_04.gif")
        .setImage('https://media.discordapp.net/attachments/862619247897477121/862925351851130900/image0.jpg?width=1200&height=393')
        .setFooter('Arigato, Hope you all have a wonderful day')
        .setTimestamp()

        if (!args[0]) {
            let categories = [];
      
            //categories to ignore
            let ignored = [
              "dev",
              "configuration",
              "utils",
              "reportadd",
            ];
      
        
      
            readdirSync("./commands/").forEach((dir) => {
              if (ignored.includes(dir.toLowerCase())) return;
              const name = `${emo[dir.toLowerCase()]} ${dir.toUpperCase()}`;
              let cats = new Object();
      
              cats = {
                name: name,
                value: `\`${prefix}help-${dir.toLowerCase()}\``,
                inline: true,
              };
      
              categories.push(cats);
              //cots.push(dir.toLowerCase());
            });

        const embed = new Discord.MessageEmbed()
        .setTitle("Our full help menu!")
        .setDescription(
          `\`\`\`js\nPrefix: ${prefix}\nExtra information: <> If you see any error or any kind of bug please report to us!\`\`\`\n> To invite me : [Invite me](https://discord.com/oauth2/authorize?client_id=842397001954230303&permissions=0&scope=bot)\n\n> To check out a category, use command \`${prefix}help-[category-name]\`\n> To check out a commands, use command \`${prefix}help-[command-name]\``
        )
        .addFields(categories)
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({
            dynamic: true,
          })
        )
        .setTimestamp()
        .setThumbnail(
          client.user.displayAvatarURL({
            dynamic: true,
          })
        )
        .setColor(color);
        

        const pages = [
                helpcommand,
                embed
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';
        pagination(message, pages, emojiList, timeout)
    }
}
}
