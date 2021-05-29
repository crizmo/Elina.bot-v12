client.on('ready', () => {
    console.log('Bot is ready!');

    const arrayOfStatus = [
        `${client.guilds.cache.size} servers | =help`,
        `${client.channels.cache.size} channels`,
        `${client.users.cache.size} users | =invite`,
        `Prefix: '='`
    ];

    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        //console.log(status);
        client.user.setActivity(status, { type: "WATCHING"}).catch(console.error)
        index++;
    }, 5000);
})
