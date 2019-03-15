var go1 = function(a) {
    console.log(a)
};



function go2(e, a) {
    this._name = e;
    this._sex = a;
    this.info = e + "|" + a;
    this.toString = function() {
        return this.info
    }
};

var go3 = (a, b, c) => {
    console.log(a + b + c)
}

var a = 3
var b = 1
var c = 2
var d = (a, b, c)
var str = "Visit W3Schools!";

var n = str.search("3");
console.log(new go2('jimmy', 'male').toString());
go1(1234)
go3(1, 2, 3)

// ... arguments
var f = (...args) => args[0] + args.length;
console.log("argument:" + f(1, 2, 3, 4))

//

var obj = {
        i: 10,
        b: () => console.log(this.i, this),
        c: function() {
            console.log(this.i, this);
        }
    }
    //
function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10

function foo(...args) {
    return args
}
console.log(foo(1, 2, 3)) // [1,2,3]


//getter|setter
var language = {
    set current(name) {
        this.log.push(name);
    },
    log: []
}

language.current = 'EN';
language.current = 'FA';
language.current = 'CN';
console.log(language.log);
// expected output: Array ["EN", "FA"]