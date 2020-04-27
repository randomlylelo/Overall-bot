const { Inhibitor } = require('klasa');

module.exports = class extends Inhibitor {

    constructor(...args) {
        super(...args, {
            name: 'generalInhib',
            enabled: true,
            spamProtection: false
        });
    }

	async run(message) {
		if( message.channel.type != 'text' ) { throw ':no_entry_sign: | You can run commands only in servers!' }
	}
};