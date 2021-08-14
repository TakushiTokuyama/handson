var sqlite3 = require('sqlite3').verbose()

let db

exports.DbCommon = class DbCommon {
    static init() {
        db = new sqlite3.Database('sample.db');
    }

    static getDb() {
        return db
    }

    static initCreateTableUser() {
        db.serialize(() => {
            // CreateTableUser
            let CREATE_TABLE_USER = 'CREATE TABLE IF NOT EXISTS User'
                + '(userId NUMBER AUTO INCREMENT PRIMARY KEY,'
                + 'firstName TEXT NOT NULL,'
                + 'lastName TEXT NOT NULL,'
                + 'fullName TEXT NOT NULL)'

            db.run(CREATE_TABLE_USER, (error) => {
                if (error) {
                    console.log(error)
                }
                console.log(CREATE_TABLE_USER);
            });
        })
    }
}