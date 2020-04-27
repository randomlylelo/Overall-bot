const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            name: 'test',
			description: 'testing features of klasa & discordjs',
        });
    }

    async run(message) {
		const embed = new MessageEmbed().setDescription('test');
		return message.sendEmbed(embed);
    }

};