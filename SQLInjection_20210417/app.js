var qs = require('querystring');
var page = require("./render.js");

// index
var index = function (res) {
    res.end(page.index());
}

// result
var result = function (req, res) {
    var data = '';
    req.on('data', function (chunk) { data += chunk }).on('end', function () {
        var qsdata = qs.parse(data);
        // var regix = /;+/;
        var db = require("./settings/dbSetting").dbConnection();
        console.info('dbconnection');
        db.serialize(() => {
            //console.log(escape(qsdata.id));
            db.all(`SELECT * FROM User WHERE Id = ${qsdata.id} AND Password = ${qsdata.password}`, function (err, rows) {
                if (rows === undefined) {
                    res.end(page.error());
                }
                else if (rows.length > 0) {
                    console.info('success');
                    res.end(page.success(rows));
                } else {
                    console.info('failer');
                    res.end(page.failer());
                }
            });
            db.close();
            console.info('dbclose');
        });
    })
}

exports.index = index;
exports.result = result;