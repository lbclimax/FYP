const net = require('net');
require('./firebase');
var admin = require("firebase-admin");

const database = admin.database()


var tenantsPower = database.ref('user/tenants-power');

var workingSocket=null;
var tenantPowerStatus= 'power:1,1'

const server = net.createServer(socket=>{

  socket.on("data",data=>{
    console.log(data.toString())
  })

  socket.on("close",(hardError)=>{
    if(hardError)console.log('closed with error');
    else console.log("closed sucefully");
    workingSocket=null;
  })

  
})

server.on('connection',(socket=>{
  console.log('client connected ');
  socket.write('wellcome');
  workingSocket=socket

}))

server.on('close',()=>{
  console.log('connection closed')
})

tenantsPower.on('value',datashap=>{
  let value = datashap.val();
  tenantPowerStatus= `power:${value[0]},${value[1]}`
  if(workingSocket) workingSocket.write(tenantPowerStatus)
})

server.listen(8060,'0.0.0.0')