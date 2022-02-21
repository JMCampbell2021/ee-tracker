const mysql = require('mysql2');

// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Knicks2022',
  database: 'employee_db'
});

db.connect(function (err) {
  if (err) throw err;
});

module.exports = db