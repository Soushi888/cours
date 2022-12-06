const express = require('express');
const app = express();
const db = require('./db.js');
const PORT = 4000;

app.get('/', (req, res) => {
	res.send({message: 'Hello World!'});
});

const users = require('./users.js');
app.use('/users', users);

app.use((req, res, next) => {
	res.status(404).send({message: 'Not found'});
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});