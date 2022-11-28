const path = require("path") ;

console.log(path.sep) ;

// for joining the whole path.
const filePath = path.join("/content/subfloder/text.txt") ;
console.log(filePath) ;

// for base file.
const basefile = path.basename(filePath) ;
console.log(basefile) ;

// for absolute path
const absolutePath = path.resolve(__dirname,"content", "subfolder", "text.txt");
console.log(absolutePath) ;