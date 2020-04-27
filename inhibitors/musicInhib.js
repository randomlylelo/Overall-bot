const { Inhibitor } = require('klasa');

module.exports = class extends Inhibitor {

    constructor(...args) {
        super(...args, {
            name: 'musicInhib',
            enabled: true,
            spamProtection: false
        });
    }

	async run(message) {
		// if( !(message.member.voice.channel) ) { throw 'You are not in a voice channel!'}
	}
};