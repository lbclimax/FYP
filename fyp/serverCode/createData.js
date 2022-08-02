require('./firebase')
const { time } = require('console');
var admin = require("firebase-admin");
var moment = require("moment")
const database = admin.database()

console.log(moment().subtract(1, 'seconds').valueOf())
let now = moment()
for(let i=0;i<1000000;i++){
    console.log(now.subtract(5, 'seconds').valueOf())
}