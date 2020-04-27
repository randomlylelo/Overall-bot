const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
			description: 'stats',
        });
    }

    async run(message) {
		const embed = new MessageEmbed()
			.setTitle('Stats')
			.setDescription('View the stats about this bot!')
			.addFields(
				{ name: `**__In ${this.client.guilds.cache.size} guilds!__**`, value: `Serving ${this.client.users.cache.size} people.` },
				{ name: 'Uptime', value: `${Math.floor(this.client.uptime/1000/60)} mins` },
			)

		return message.sendEmbed(embed);
    }

};