var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var headers = require('./http-helpers');


// require more modules/folders here!

exports.handleRequest = function (req, res) {
  
  if ( req.method === 'GET' /* need to pass only for / */) {
    fs.readFile(archive.paths.index, (err, data ) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    })
  } else if (req.method === 'POST') {
      let body = [];
      req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();        
      console.log('the body----------', body);
      res.writeHead(201, {'Content-Type':'text/html'});
      //will add data to url list and archive
      archive.addUrlToList(body , ()=>{console.log('this is log function---------callbak--------' + body)});
      res.end(JSON.stringify(body))
    }); 
    // const responseBody = {headers,method,url,body};
    // response.end(JSON.stringify(responseBody));
  }

};