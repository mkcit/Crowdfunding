
const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'mkscit',
    password: '20030259',
    port: 3306,
    database: 'crowdfunding',

});

module.exports = pool.promise();