const express = require('express');
const app = express();
const db = require('./db.js');
const users = require('./users.js');
const PORT = 4000;

app.use(express.json());

app.get('/', (req, res) => {
	res.send({message: 'Hello World!'});
});

app.use('/users', users);

app.use((req, res, next) => {
	res.status(404).send({message: 'Not found'});
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});