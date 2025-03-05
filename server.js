const express = require('express');
const classesRoutes = require('./src/routes/classesRoutes.js');
const loginRoutes = require('./src/routes/loginRoutes.js');

const app = express();
const port = 8080;

app.use(express.static('public'));
app.use(express.json());

app.use('/', classesRoutes);
app.use('/', loginRoutes);

app.listen(port, () => {
    console.log('Server Listening On: http://localhost:8080/');
});

// Command to find server id to kill: ps -fA | grep python
