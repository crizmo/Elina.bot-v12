const SnakeGame = require('snakecord');

const snakeGame = new SnakeGame({
    title: 'Snake Game',
    color: "#0FFFFF",
    backg: "🟦", 
    snake: "🟠", 
    snakeTail: "🟡", 
    apple: "🍩",
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

