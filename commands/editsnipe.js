const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('editsnipe')
        .setDescription('oqe voce editou puta?'),

    async execute(interaction) {
        const snipe = interaction.client.editSnipes.get(interaction.channel.id);
        
        await interaction.reply(snipe
            ? {
                embeds: [
                    new EmbedBuilder()
                        .setDescription(snipe.content)
                        .setAuthor({name: snipe.author.username, iconURL: snipe.author.avatarURL({format: 'png'})})
                        .setFooter({text: `#${snipe.channel}`})
                        .setTimestamp(snipe.createdAt),
                ],
              }
            : "não tem nada ue")
    }
};