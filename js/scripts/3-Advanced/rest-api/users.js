const express = require('express');
const md5 = require('md5');
const router = express.Router();
const db = require("./db");

// Get all users
router.get('/', (req, res) => {
	const users = db.all('SELECT * FROM user', [], (err, rows) => {
		if (err) throw err;
		res.send(rows);
	});
});

// Get one user by id
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

// Create a new user
router.post('/', (req, res) => {
	const errors = [];
	if (!req.body) return res.status(400).send('Request body is missing');

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
	const params = [data.name, data.email, md5(data.password)];
	db.run(sql, params, function (err, result) {
		if (err) {
			res.status(400).json({"error": err.message});
			return;
		}
		res.json({
			"message": "success",
			"data": data,
			"id": this.lastID
		});
	});
});

// Update a user
router.put('/:id', (req, res) => {
	const data = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	};
	db.run(
		`UPDATE user set 
					 name = COALESCE(?,name), 
					 email = COALESCE(?,email), 
					 password = COALESCE(?,password) 
					 WHERE id = ?`,
		[data.name, data.email, md5(data.password), req.params.id], function (err, result) {
			if (err) {
				res.status(400).json({"error": res.message});
				return;
			}
			res.json({
				message: "success",
				data: data,
				changes: this.changes
			});
		});
});

// Delete a user
router.delete('/:id', (req, res) => {
	db.run(
		'DELETE FROM user WHERE id = ?',
		req.params.id,
		function (err) {
			if (err) {
				res.status(400).json({"error": res.message});
				return;
			}
			res.json({"message": "deleted", changes: this.changes});
		});
});

module.exports = router;