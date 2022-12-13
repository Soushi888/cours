const sqlite3 = require('sqlite3').verbose();
const md5 = require('md5');
const DB_SOURCE = 'db.sqlite';

let db = new sqlite3.Database(DB_SOURCE, (err) => {
	const createAndPopulateTable = () => {
		db.run(`CREATE TABLE users
            (
                id       INTEGER PRIMARY KEY AUTOINCREMENT,
                name     text,
                email    text UNIQUE,
                password text,
                CONSTRAINT email_unique UNIQUE (email)
            )`, (err) => {
			err && console.log(err);
			const insert = 'INSERT INTO users (name, email, password) VALUES (?,?,?)';
			db.run(insert, ['admin', 'admin@email.com', md5('admin123456')]);
			db.run(insert, ['user 1', 'user1@email.com', md5('user123456')]);
			db.run(insert, ['user 2', 'user2@email.com', md5('user123456')]);
		});
	};

	if (err) {
		console.error(err.message)
		throw err
	} else {
		console.log('Connected to the SQLite database.');

		db.run('SELECT name FROM sqlite_master WHERE type="table" AND name="users"', (err) => {
			if (!err) {
				console.log('Recreating users table');
				db.run('DROP TABLE users', createAndPopulateTable)
			} else {
				console.log('Creating users table');
				createAndPopulateTable();
			}
		});
	}
});

module.exports = db;
