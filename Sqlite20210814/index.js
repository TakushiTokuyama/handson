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
    users.push(new UserModel.User(i, i, i, i))
}

// INSERT ALL
users.forEach((user, index) => {

    var insertSql = `insert or replace into user 
        (firstName, lastName, fullName)
        values (${user.firstName}, ${user.lastName}, ${user.fullName})`

    DbSetting.DbCommon.getDb().run(
        insertSql
    )

    fs.appendFile("insert.txt", insertSql, (error) => {
        if (error) throw err;
    });
})

// ALL COUNT
DbSetting.DbCommon.getDb().get(`select count(*) from user`, (err, row) => {
    if (err) {
        console.log(error)
    }
    console.log(row["count(*)"])
})