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