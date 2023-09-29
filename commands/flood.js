const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');
var intervalo;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('flood')
		.setDescription('escolha alguem pra floodar!')
		.addUserOption(option =>
			option.setName('alvo')

				  .setDescription('o @ de quem vc quer floodar').setRequired(true)),
				
	async execute(interaction) {
		const alvo = interaction.options.getUser('alvo');
                const confirm = new ButtonBuilder()
			.setCustomId('confirm')
			.setLabel('Para o flood')
			.setStyle(ButtonStyle.Danger);

                intervalo = setInterval(function(){interaction.channel.send(`<@${alvo.id}>`)}, 2000);

		const row = new ActionRowBuilder()
			.addComponents(confirm);

		const response = await interaction.reply({
			content: "Quer parar o flood?",
			components: [row],
			ephemeral: true
                });

		const collectorFilter = i => i.user.id === interaction.user.id;

try {
	const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60000 });
	if (confirmation.customId === 'confirm') {
		await clearInterval(intervalo);
		await confirmation.update({ content: 'Cancelado!', components: [] })
	} 
} catch (e) {
	await clearInterval(intervalo);
	await interaction.editReply({ content: 'Já deu né...', components: [] });
}

				
	},
};
