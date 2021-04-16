function dbConnection() {
    const sqlite = require('sqlite3').verbose();
    const fs = require('fs');

    let dbfilepath = fs.readFileSync('./settings/dbfilepath.txt', 'utf-8');

    return new sqlite.Database(dbfilepath);
}

exports.dbConnection = dbConnection;