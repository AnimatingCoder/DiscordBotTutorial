const Discord = require("discord.js")
const client = new Discord.Client()
const {token} = require("./config.json")

client.once('ready', ()=>{ //Once the bot is ready...
    console.log("Ready!") //Log "Ready!"
})

client.on('message', msg=>{ //Detects a message being sent
    if(msg.content.toLowerCase() === "hello"){ //Checks if the message says "hello"
        msg.reply("Hello there!") //Replies with "Hello there!"
    }
})


client.on('message', msg=>{//Detects a message being sent
    if(msg.content.toLowerCase().startsWith("!say")){ //Checks if the message says "hello"
        const args = msg.content.split(' ') //Seperates the words in the message
        args.shift() //Takes away the first word, which is !say

        msg.channel.send(args.join(' ')) //Sends the message you wrote, but without "!say"
    }
})

client.login(token) //Login
