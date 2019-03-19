// instanceof is a prototype identity check.
// NOT a type check.

// That means it lies across execution contexts,
// when prototypes are dynamically reassigned,
// and when you throw confusing cases like this
// at it:
class boy {
    constructor(name) {
        this.name = name
    }
}
boy.prototype.gender = 'male'


function foo(a1, a2) {
    this.a1 = a1;
    this.a2 = a2
}
const bar = { a: 'a' };
const person = { name: '111', fullname: function() { return this.name }, setname: (str) => { name = str } }
const f1 = new foo()
    //foo.prototype = bar;

// Is bar an instance of foo? Nope!
console.log(bar instanceof foo); // false

// Ok... since bar is not an instance of foo,
// baz should definitely not be an instance of foo, right?
const baz = Object.create(bar);

// ...Wrong.
console.log(baz instanceof foo); // true. oops.
console.log(f1 instanceof foo)
console.log(typeof {} + ":" + typeof foo + ":" + typeof bar + ":" + typeof Object.create(bar))
var jimmy = Object.create(person)
jimmy.setname("jimmy")
console.log(jimmy.fullname())
console.log(person.prototype)
console.log(Date.prototype)
console.log(Array.prototype)
console.log(foo.prototype)
console.log(bar.prototype)
console.log(boy.prototype)
console.log(new boy("jimmy").gender)