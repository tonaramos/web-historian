var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  index: path.join(__dirname, '../web/public/index.html'),
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../a/rchivessites'),
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
//input url and callback
/*
output boolean
given a string we will search an array with the urlListContents
*/
  // let listArray = this.readListOfUrls();
  fs.readFile(this.paths.list, (err, data ) => {
    
  });
};

exports.addUrlToList = function(url, callback) {

  fs.appendFile( this.paths.list , function () {
    if (err) {
      // console.log('-----------------------AppendFile FAILED');
    } else {
      // console.log('----------------------SUCCESs appending new URL');
    }
  });
  
};



exports.isUrlArchived = function(url, callback) {
//returns boolean if the url exist in archive/sites

};

exports.downloadUrls = function(urls) {
//copy html into archive.sites
};







