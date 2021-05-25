module.exports = {
    name: 'rps',
    cooldown: 2,
    permissions: ["SEND_MESSAGES"],
    description: "rps command",
    execute(client, message, args, Discord) {
  
      let question = args[0]
  
      if (!question) {
        message.channel.send("Pls enter rock / paper / sissors")
      }
  
      else {
  
        let responses = ["=rps rock", "=rps paper", "=rps scissors"]
  
        let response = Math.floor(Math.random() * responses.length)

        message.reply(responses[response])

        if (!question == response) {
          message.channel.send("I choose the same, Its a tie")   
        }
      }
    }
  }