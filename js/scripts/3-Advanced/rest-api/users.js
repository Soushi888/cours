const express = require('express');
const router = express.Router();

const db = require("./db");
router.get('/', (req, res) => {
	const users = db.all('SELECT * FROM user', [], (err, rows) => {
		if (err) throw err;
		res.send(rows);
	});
});

// get one user by id
router.get('/:id', (req, res) => {
	const id = req.params.id;
	const sql = 'SELECT * FROM user WHERE id = ?';
	const params = [id];
	db.get(sql, params, (err, row) => {
		if (err) {
			res.status(400).json({"error": err.message});
			return;
		}
		res.json(row);
	});
});

// create a new user
router.post('/', (req, res) => {
	const errors = [];
	if (!req.body.name) {
		errors.push("No name specified");
	}
	if (!req.body.email) {
		errors.push("No email specified");
	}
	if (!req.body.password) {
		errors.push("No password specified");
	}
	if (errors.length) {
		res.status(400).json({"error": errors.join(",")});
		return;
	}
	const data = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	};
	const sql = 'INSERT INTO user (name, email, password) VALUES (?,?,?)';
	const params = [data.name, data.email, data.password];
});

module.exports = router;