const { Client } = require('pg');
const CONFIG = require('../../config.json');

const client = new Client({
    user: CONFIG.user,
    password: CONFIG.password,
    port: CONFIG.port,
    database: CONFIG.database,
});

client
    .connect()
    .then(() => {
        console.log('Connected To College Database');
    })
    .catch((err) => {
        console.err('Failed Due To: ', err);
    });

module.exports = client;
