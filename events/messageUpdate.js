const { Events } = require('discord.js');


module.exports = {
	name: Events.MessageUpdate, 
    async execute(oldMessage, newMessage) {
        if (oldMessage.partial  || oldMessage === newMessage || newMessage.author.bot === true) return; // content is null
        
        oldMessage.client.editSnipes.set(oldMessage.channel.id, {
            author: oldMessage.author,
            content: oldMessage.content,
            createdAt: newMessage.editedTimestamp,
            channel: oldMessage.channel.name,
        })
},
};