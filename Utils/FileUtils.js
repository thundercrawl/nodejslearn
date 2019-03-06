const fs = require('fs');

var exit = false;

module.exports = {

    createLogFileBYPATH: function(path) {
        fs.exists(path, (exists) => {
            if (exists)
                exit = true;
            else {
                console.log("File not exit,create it")
                fs.writeFile(path, '', function(err) {
                    if (err) throw err;
                    console.log('create file and save');
                });
            }
        });




    }
}