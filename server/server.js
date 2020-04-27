const express = require('express');
const server = express();

server.all('/', (req, res) => { res.send('Beep Boop') } );

module.exports = function keepAlive() { server.listen(3000, () => { console.log('Beep Boop') } ) };
