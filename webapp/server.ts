express = require('express');
//for using an import here we need to configure the tsconfig.json
//setting the option module to commonjs
 https = require('https');
 fs = require('fs');
//process.env.SECRET
var app = express()
const port = 3000;

app.use(express.static('build'))

https.createServer({
        key: process.env.API_KEY,
        cert: process.env.API_CERT
}, app).listen(port, function() {
        console.log("servidor activo")
})

//app.listen(port, ():void => {
 //   console.log('Webapp started on port '+ port);
//}).on("error",(error:Error)=>{
  //  console.error('Error occured: ' + error.message);
//});