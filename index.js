const { Client } = require('klasa');

const token = process.env.TOKEN
const prefix = '+'

const client = new Client({
    prefix: prefix,
    presence: { activity: { name: 'Testo, help', type: 'PLAYING' } },
    commandLogging: true,
	disabledCorePieces: ['commands'], // Get rid of default commands.
    readyMessage: (client) => `Successfully initialized.`,
})

client.login(token)

// open shell using ctrl+shift+s
/* Setup klasa
* open shell
* npm init
* then other cmds
* .replit file to have custom run cmd
*/