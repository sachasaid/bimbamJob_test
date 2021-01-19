const lineReader = require('line-reader');
const regexL = /^[DGA]*$/gm
const regexNNL = /^\d\s\d\s[NEWS]$/gm
const regexNN = /^\d\s?\d$/gm;

lineReader.eachLine('./test.txt', function(line) {
    console.log(line);
    if (line.match(regexL)) {
        console.log('regex L')
    } else if (line.match(regexNNL)) {
        console.log('regex N N L')
    } else if (line.match(regexNN)) {
        console.log('regex N N')
    }

});