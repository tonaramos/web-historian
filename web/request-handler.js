var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var headers = require('./http-helpers');


// require more modules/folders here!

exports.handleRequest = function (req, res) {
 
  // if ( req.method === 'POST') {
  //   var body = '';
  //   req.on('data', function(data) {
  //     console.log('data---------', data )
  //     body += data;
  //     console.log('Parial body: ' + body);
  //   });
  //   req.on('end', function() {
  //     console.log('Body: ' + body);
  //   });
  //   res.writeHead(200, {'Content-Type':'text/html'});
  //   res.end(html);
   
  // }
 
 
  if ( req.method === 'GET' /* need to pass only for / */) {
    fs.readFile(archive.paths.index, (err, data ) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }

};