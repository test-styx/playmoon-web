var mysql = require('mysql')

var connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB
});

connection.connect(function(err) {
    if (err) console.log(`Database-connection Error at db.js:10 -------:\n ${err}`)
});

module.exports = connection