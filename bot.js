const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTM4NzQ2NTU4NjQ5MjA0ODA2.DzIXew.8KqCKK9-vr3KD9xk-cK6_AbKi5g);
