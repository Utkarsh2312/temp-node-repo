const {readFile, writeFile} = require("fs") ;

console.log("start");
readFile("./content/first.txt", "utf8", function(err, result) {
    if(err)
    {
        console.log(err) ;
        return ;
    }
    const first = result ;

    readFile("./content/second.txt", "utf8", function(err, result) {
        if(err)
        {
            console.log(err) ;
            return ;
        }
        const second = result ;

        writeFile(
            "./content/result-async.txt",
            `Here is the result : ${first} , ${second}`,
            function(err, result) {
                if(err)
                {
                    console.log(err) ;
                    return ;
                }
                console.log("Done with the task") ;
            }
        );
    });
    
});

console.log("starting new one!") ;

// Below code will not work because result is does not contains any value so it it can be stored in the variables first and second.

// let first, second ;
// readFile
// ("./content/first.txt", "utf8", function(err, result) {
//     if(err)
//     {
//         console.log(err) ;
//         return ;
//     }

//     first = result ;
// });

// readFile
// ("./content/second.txt", "utf8", function(err, result) {
//     if(err) 
//     {
//         console.log(err) ;
//         return ;
//     }

//     second = result ;
// });

// writeFile(
//     "./content/result-my-async.txt",
//     `Here is the result file : ${first} , ${second}`,
//     function(err, result) {
//         if(err)
//         {
//             console.log(err) ;
//             return ;
//         }
//         console.log(result) ;
//     }
// );