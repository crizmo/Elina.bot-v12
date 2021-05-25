#first npm i snakecord

const SnakeGame = require('snakecord');

const snakeGame = new SnakeGame({
    backg: "🟦", 
    snake: "🟠", 
    snakeTail: "🟡", 
    apple: "🍩",
    title: 'Snake Game',
    color: "#0FFFFF",
    timestamp: false,
    gameOverTitle: "Game Over"
});

module.exports = {
    name: "snakecord",
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "snake game!",
    execute(client, message, args, Discord, cmd){
    
	return snakeGame.newGame(message);
    }
}

