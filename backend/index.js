const express = require('express')
const cors = require('cors');
const login = require('./routes/login');
const room = require('./routes/rooms');
const db = require('./db/connection');
const bodyParser = require('body-parser');

const port = 5000;
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(login);
app.use(room);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
