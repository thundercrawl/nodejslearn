const fs = require('fs');

var exit = false;

module.exports = {

    createLogFileBYPATH: function(path) {
        console.log(path)
        fs.exists(path, (exists) => {
            if (exists == true)
                exit = true;
            console.log(exists ? 'it\'s there' : 'no file exist!')
        });

        if (exit)
            fs.open(path, 'r', (err, fd) => {
                if (err) throw err;
                fs.close(fd, (err) => {
                    if (err) throw err;
                });
            });
        else {
            fs.writeFile(path, 'DOMINO HTTP', function(err) {
                if (err) throw err;
                console.log('create file and save');
            });
        }
    }

}