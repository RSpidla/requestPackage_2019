// Require 'request' module
const request = require('request');
// Require 'file system' module
const fs = require('fs');

// Use '.on('error')' to handle any errors 
request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err) {
  throw err; 
})

// Use '.on('response')' to log the HTTPS response code
  // response message '(response.statusMessage)'
  // content type '(response.headers['content-type'])'
.on('response', function (response) {
  console.log('Downloading image...');
  console.log('Response Status Code: ', response.statusCode);
  console.log('Response Header: content-type - ', response.headers['content-type']);
})

// Use '.on('end')' to print to standard out put that download is complete
.on('end', () => {
  console.log('Downloading complete...');
})

// Use piping and 'fs.createWriteStream' to save file
  // Save the file to your working directory '('./future.jpg')'
.pipe(fs.createWriteStream('./future.jpg'));


