var search = require("./search")
search.searchREST("http://localhost/").then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err)
})