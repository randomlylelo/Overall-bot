const { Command } = require('klasa');

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
			name: 'play',
        });
    }

    async run (message) {
        
        return message.send('hi');
    }
};