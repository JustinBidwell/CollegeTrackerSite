const client = require('../db/db.js');

const getUsername = async (req, res) => {
    try {
        const user = await client.query(
            `SELECT username FROM USERS WHERE username = 'justin'`
        );
        res.status(200).json(user.rows);
    } catch (err) {
        res.status(500).json({ error: 'ERROR' + err, data: false });
    }
};

module.exports = getUsername;
