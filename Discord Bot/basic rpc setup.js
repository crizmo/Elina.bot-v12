First setup the rpc on discord bot developer portal 

const RPC = require('discord-rpc');
const { strict } = require('assert');
const { warn } = require('console');
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "",
        state: "",
        startTimestamp: new Date() ,
        largeImageKey: "large",
        largeImageText: "Elina bot",
        smallImageKey: "small",
        smallImageText: "DeezNuts",
        buttons : [{label : "BOT NAME" , url : "URL"},{label : "Discord" , url : "SERVER LINK"}]
    })

    console.log("Successfully activated the RPC")
})

rpc.login({
    clientId: 'YOUR USER ID'
})
