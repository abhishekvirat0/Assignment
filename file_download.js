// Code to download file 

var http = require('http'),                                                
    Stream = require('stream').Transform,                                  
    fs = require('fs');                                                    

var url = 'http://cdn.cutshort.io/public/images/logo_full.png';                    

http.request(url, function(response) {                                        
  var data = new Stream();                                                    

  response.on('data', function(chunk) {                                       
    data.push(chunk);                                                         
  });                                                                         

  response.on('end', function() {                                             
    fs.writeFileSync('image.png', data.read());                               
  });                                                                         
}).end();


