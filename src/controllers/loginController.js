const client = require('../db/db.js');

const getUsername = async (req, res) => {
    try {
        console.log(req.body.password);
        const user = await client.query(
            `SELECT username FROM USERS WHERE username = '${req.body.username}' AND password = '${req.body.password}'`
        );
        res.status(200).send(user.rows);
    } catch (err) {
        res.status(500).json({ error: 'ERROR' + err, data: false });
    }
};

module.exports = getUsername;
