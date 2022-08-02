
var admin = require("firebase-admin");

var serviceAccount = require("./enegymonitor.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://enegymonitor-default-rtdb.europe-west1.firebasedatabase.app"
});





