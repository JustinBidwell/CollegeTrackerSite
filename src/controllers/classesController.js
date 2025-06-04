const client = require('../db/db.js');

const getClasses = async (req, res) => {
    try {
        const results = await client.query('SELECT * FROM scrapperdata');
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(500).json({ error: 'FAILED DUE TO' + err.message });
    }
};

module.exports = getClasses;
