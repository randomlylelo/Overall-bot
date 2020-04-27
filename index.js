const { Client } = require('klasa');
const keepAlive = require('./server/server.js');

const token = process.env.TOKEN
const prefix = '+'

const client = new Client({
    prefix: prefix,
    presence: { activity: { name: `${prefix}help`, type: 'PLAYING' } },
    commandLogging: true,
	disabledCorePieces: ['commands'], // Get rid of default commands.
    readyMessage: (client) => `Successfully initialized.`,
})

client.login(token)
keepAlive();

// open shell using ctrl+shift+s
/* Setup klasa
* open shell
* npm init
* then other cmds
* .replit file to have custom run cmd
*/