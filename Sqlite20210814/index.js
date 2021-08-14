const DbSetting = require('./dbCommon');
const UserModel = require('./User')

const fs = require('fs')

// CreateDataBase
DbSetting.DbCommon.init();

DbSetting.DbCommon.getDb();

// initCreateTableUser
DbSetting.DbCommon.initCreateTableUser()

let users = new Array()

// users
for (var i = 0; i < 400; i++) {
    users.push(new UserModel.User(i, i, i, i + i))
}

// db呼び出し
var db = DbSetting.DbCommon.getDb()

var insertSql = `insert into user 
        (firstName, lastName, fullName)
        values (? ,? ,?)`

var stmt = db.prepare(insertSql)

// INSERT ALL
users.forEach((user) => {

    stmt.run(`${user.firstName}`, `${user.lastName}`, `${user.fullName}`);

    fs.appendFileSync("insert.txt", `firstName:${user.firstName} lastName:${user.lastName} fullName:${user.fullName}\n`, (err) => {
        if (err) throw err;
    });
})

stmt.finalize(() => {
    // ALL COUNT
    db.get(`select count(*) from user`, (err, row) => {
        if (err) {
            console.log(err)
        } else {
            console.log(row["count(*)"])
        }
    })
});

