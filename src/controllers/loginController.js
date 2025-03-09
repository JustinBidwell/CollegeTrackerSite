const client = require('../db/db.js');

const getUsername = async (req, res) => {
    try {
        let text =
            'SELECT username FROM USERS WHERE username = $1 AND password = $2';
        let values = [req.body.username, req.body.password];
        const user = await client.query(text, values);
        if (user.rows.length > 0) {
            text = 'SELECT * FROM CLASSES WHERE username = $1';
            values = [user.rows[0].username];
            const classes = await client.query(text, values);
            res.status(200).send(classes.rows);
        } else {
            res.status(200).send([]);
        }
    } catch (err) {
        res.status(500).json({ error: 'ERROR' + err, data: false });
    }
};

module.exports = getUsername;
