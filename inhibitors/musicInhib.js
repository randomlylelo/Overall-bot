const { Inhibitor } = require('klasa');

module.exports = class extends Inhibitor {

    constructor(...args) {
        super(...args, {
            name: 'musicInhib',
            enabled: true,
            spamProtection: false
        });
    }

	async run(message, command) {
		if( message.channel.type != 'text' ) { return }
	}
};