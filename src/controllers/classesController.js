const client = require('../db/db.js');

const getClasses = async (req, res) => {
    try {
        const results = await client.query('SELECT * FROM classes');
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(500).json({ error: 'FAILED DUE TO' + err.message });
    }
};

const test = async (req, res) => {
    try {
        const data = await req.body;
        res.status(201).send(data);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Server error');
    }
};

module.exports = { getClasses, test };
