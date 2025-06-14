const client = require('../db/db.js');

const createAccount = async (req, res) => {
    try {
        const { username, password, major, classData } = req.body;

        let text =
            'INSERT INTO users (username, password, major) VALUES ($1, $2, $3)';
        let values = [username, password, major];
        await client.query(text, values);

        text =
            'INSERT INTO classes (username, class, credits, year, semester, completed, in_progress, scheduled, id, not_taken) VALUES ($1, $2, $3, $4, $5, false, false, false, $6, true)';

        for (const i in classData) {
            values = [
                username,
                classData[i].course,
                classData[i].credits,
                classData[i].year,
                classData[i].semester,
                classData[i].id,
            ];
            await client.query(text, values);
        }
    } catch (err) {
        res.status(500).json({ error: 'ERROR' + err, data: false });
    }
};

module.exports = createAccount;
