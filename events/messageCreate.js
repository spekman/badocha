const { Events, ChannelType } = require('discord.js');
const { userId } = require('../config.json');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
        if(message.author.bot) return
        if (message.author.id !== userId && message.channel.type == ChannelType.DM){
            console.log(`(${message.author.id}) ${message.author.username}: ${message.content}`);
        } if (message.channel.type == ChannelType.DM && message.content.toLowerCase() == 'oi'){
            message.author.send('Oiii rsrs');
        }
},
};