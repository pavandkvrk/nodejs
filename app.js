// First Excerise - Create a File 
const fs = require('fs');
fs.writeFileSync('notes.txt','Hi,Welcome To Nodejs');
// Second Excerise - Append Text To Same File
fs.appendFileSync('notes.txt'," ,First Day At Practice");
// Third Excerise - Import Your Files
const utils = require('./utils');
var result = utils();
console.log(result);