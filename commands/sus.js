const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('sus')
    .setDescription('seje impostor!')
    .addUserOption(option =>
        option.setName('impostor')
        
              .setDescription('o @ de quem vc quer se transformar').setRequired(true))
    .addStringOption(option =>
        option.setName('input')

              .setDescription('o que ele vai dizer').setRequired(true)),
            
    async execute(interaction) {
        const impostor = interaction.options.getUser('impostor');
        const input = interaction.options.getString('input');
        interaction.channel.createWebhook({
            name: impostor.username,
            avatar: impostor.avatarURL({format: 'png'}),
        }).then(webhook => 
            webhook.send(input).then(() =>{
                webhook.delete()}))
            
        await interaction.reply({content: 'foi', ephemeral: true})

        
    }


}