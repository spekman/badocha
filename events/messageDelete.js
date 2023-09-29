const { Events } = require('discord.js');


module.exports = {
	name: Events.MessageDelete,
	async execute(message) {
        if (message.partial || (message.embeds.length && !message.content)) return;
        
        message.client.snipes.set(message.channel.id, {
            author: message.author,
            content: message.content,
            embeds: message.embeds,
            channel: message.channel.name,
            attachments: [...message.attachments.values()].map((a) => a.proxyURL),
            createdAt: message.createdTimestamp,
        }
        )
},
};