const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('snipe')
    .setDescription('oqe voce disse puta?'),

    async execute(interaction) {
        const snipe = interaction.client.snipes.get(interaction.channel.id);
		if (!snipe) return interaction.reply("There's nothing to snipe!"); 

		const embed = new EmbedBuilder()
			.setAuthor({name: snipe.author.username, iconURL: snipe.author.avatarURL({format: 'png'})})
			.setFooter({text: `#${snipe.channel}`})
			.setTimestamp(snipe.createdAt);
			if (snipe.content) embed.setDescription(snipe.content);

		await interaction.reply((snipe.attachments.length) 
        ?   { embeds: [embed], files: [new AttachmentBuilder(snipe.attachments[0])] }
        :   { embeds: [embed]})
    }
};  