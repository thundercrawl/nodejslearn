const fs = require('fs');
var filepath = 'c:/tmp/1.log'
var exit = false;

fs.exists(filepath, (exists) => {
    if (exists == true)
        exit = true;
    console.log(exists ? 'it\'s there' : 'no file exist!')
});

if (exit)
    fs.open(filepath, 'r', (err, fd) => {
        if (err) throw err;
        fs.close(fd, (err) => {
            if (err) throw err;
        });
    });
else {
    fs.writeFile(filepath, 'DOMINO HTTP', function(err) {
        if (err) throw err;
        console.log('create file and save');
    });
}