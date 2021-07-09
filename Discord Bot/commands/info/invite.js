const discord = require("discord.js");
const client = new discord.Client();
const discordButtons = require("discord-buttons-plugin");
const { MessageEmbed } = require('discord.js');
const buttonClient = new discordButtons(client)

module.exports = {
    name: "invite",
    permissions: ["SEND_MESSAGES"],
    cooldown: 5,
    description: "test command",

    execute(client, message, args, Discord) {
    if(message.content === "=invite") {
     const embed = new discord.MessageEmbed()
     .setTitle("‎‎Elina Bot")
     .setDescription("Hi~ I am Elina! Nice to meet you. I have many fun commands which can bring a new twist to your server , I am new on Discord but i am sure you will enjoy my presence <3 . Hope you have a great day~")
     .setThumbnail("https://images-ext-1.discordapp.net/external/xI8qpaUqhLswLVhFkX334qg-x766Uti_uBQJP7FY0As/%3Fsize%3D256/https/cdn.discordapp.com/avatars/842397001954230303/557d99168d42b845750241d8d7cd0f5b.png")
     .setColor("#FFDBE9");


   const button1 = new buttonClient.MessageButton()
   .setLabel("Elina Bot Invite")
   .setURL("https://discord.com/oauth2/authorize?client_id=842397001954230303&permissions=0&scope=bot")

   const button2 = new buttonClient.MessageButton()
   .setLabel("Support server")
   .setURL("https://discord.gg/drunkbetch")

   buttonClient.send(null, { channel: message.channel.id, embed, buttons: [ [button1, button2] ]})


 }
    }
};