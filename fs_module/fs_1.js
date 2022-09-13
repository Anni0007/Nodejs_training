const {readFileSync} = require('fs')
const fs = require('fs')
const fileData = fs.readFileSync('./file.txt', 'utf8')
console.log( fileData);
fs.writeFileSync('./file.txt', 'new line added in file.txt', {flag: 'a'})