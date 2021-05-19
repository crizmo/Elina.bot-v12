const fs = require('fs');

module.exports = (client, Discord) =>{
    const command_files = fs.readdirSync(`./commands/`).filter(file => file.endsWith('.js'))

    for(const file of command_files){
        const command = require(`../commands/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
        }else {
            continue;
        }
    const command_files = fs.readdirSync(`./commands/fun/`).filter(file => file.endsWith('.js'))

    for(const file of command_files){
        const command = require(`../commands/fun/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
        }else { 
            continue;
        }
    const command_files = fs.readdirSync(`./commands/moderation/`).filter(file => file.endsWith('.js'))

    for(const file of command_files){
        const command = require(`../commands/moderation/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
        }else {
            continue;
        }
    const command_files = fs.readdirSync(`./commands/server/`).filter(file => file.endsWith('.js'))

    for(const file of command_files){
        const command = require(`../commands/server/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
        }else {
            continue;
        }
    const command_files = fs.readdirSync(`./commands/affection/`).filter(file => file.endsWith('.js'))

    for(const file of command_files){
        const command = require(`../commands/affection/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
        }else {
            continue;
        }
    const command_files = fs.readdirSync(`./commands/extras/`).filter(file => file.endsWith('.js'))

    for(const file of command_files){
        const command = require(`../commands/extras/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
        }else {
            continue;
        }
    }
    }
    }
    }
    }   
    }
}
