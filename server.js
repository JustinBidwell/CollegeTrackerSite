const express = require('express');
const classesroutes = require('./src/routes/classesRoutes.js');
const loginroutes = require('./src/routes/loginRoutes.js');
const path = require('path');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/', classesroutes);
app.use('/', loginroutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log('server listening on: http://localhost:8080/');
});

// Command to find server id to kill: ps -fA | grep python
