var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var htmlFetcher = require('../workers/htmlfetcher');
/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  index: path.join(__dirname, '../web/public/index.html'),
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  fs.readFile(this.paths.list, (err, data ) => {
    callback((''+data).split('\n'));
  });
};

exports.isUrlInList = function(url, callback) {


  this.readListOfUrls(function(urls){
    callback(urls.includes(url));
  });
};

exports.addUrlToList = function(url, callback) {

  this.isUrlInList(url,(exists) => {
    if(exists) {
      console.log('The url alredy exists!');
    } else {
      fs.appendFile(this.paths.list,url,(error) =>{
      if(error) { 
        console.error(error);  
      } else {
       console.log('from archive helpers')
        callback();
      }
    })
    }
  });
};

exports.isUrlArchived = function(url, callback) {
//returns boolean if the url exist in archive/sites

// www.google.com
// callback 
// fs.acces(path, function(err) {
  //if(err) {
     // do something with error;
     // callback(err, null);
  //} else {
     // do something with data;
     // callback(null, data);
  //}
// }

  fs.access(`${this.paths.archivedSites}/${url}`, fs.constants.F_OK,(err) => {
   // console.log(`${url} ${err ? 'does not exist': 'exist!' }`);   
    callback(err ? false : true);
  });
};

exports.downloadUrls = function(urls) {
// var ulrs = ['www.google.com', ...];
//urls.forEach(function(url) {
  //isUrlArchived(url, function(err, data) {
    //if (err) {
      //console.log(err);
    //} else {
      // console.log('Success!! We got this data ', data);
    //}
  //});
//});







//copy html into archive.sites
/*
iterate the urls list 
if isUrlArchid = true {
}
*/

  for (let i = 0; i < urls.length; i++) {
console.log(`${this.paths.archivedSites}/${urls[i]}`)
    this.isUrlArchived(urls[i], (boolean) => {
        if(!boolean) {
        fs.appendFileSync(`${this.paths.archivedSites}/${urls[i]}`, '');
        // if(!boolean) {
        // fs.mkdir(`${this.paths.archivedSites}/${urls[i]}`,function(err){
        // if(err){
        //   return console.log(err);
        // } else {
        //   return fs.readdirSync(archive.paths.archivedSites);
        // }
      };      
        //add file to archive/sites/
        //fs.mkdir?
       /* fs.appendFile(`${this.paths.archivedSites}/${url[i]}`, '', (err) => {
          console.log('I failed, sorry');
        });
*/
        //this.htmlFetcher.downloadWebsiteHtml(urls);
    });
  }
};




























