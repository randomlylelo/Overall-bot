const { Command } = require('klasa');

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
			name: 'leave',
        });
    }

    async run (message) {
        
        return message.send('hi');
    }
};