var func1 = server => {

    console.log('use server ' + server)
}


func1("odserver1")


var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(elements.map(element => {
        return element.length
    }))
    // => purpose to short expression
console.log(elements.map(element => element.length))
console.log(elements.map(({ "length": lengthFooBArX }) => lengthFooBArX))
console.log(elements.map(({ length }) => length))

var pow = x => x * x
var add = (x, y) => x + y
console.log(pow(100))
console.log(add(100, 100))

//return a function
console.log(() => ({ a: 1 }))

//