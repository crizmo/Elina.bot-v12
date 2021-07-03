var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'image',
    cooldown: 10,
    permissions: ["ATTACH_FILES"],
    description: 'this is a image comamnd',
    async execute(client, message, args){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Please enter image name');

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
    }   
}
