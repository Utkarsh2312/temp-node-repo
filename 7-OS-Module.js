// OS Module
const os = require("os") ;

// info about the current user
const user = os.userInfo() ;
console.log(user) ;

// method return the uptime of system
console.log(`The system uptime is ${os.uptime()} seconds`) ;

// method for information about the current OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    hostName: os.hostname(),
    machine: os.machine() 
}

console.log(currentOS) ;
