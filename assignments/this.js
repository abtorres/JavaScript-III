/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global binding - without any context 'this' will refer to the global object. the global object being the window.
* 2. implicit binding - javascript will look and say that 'this' must be the thing before the dot.
* 3. new binding - here 'this' refers to whatever object is returned by the constructor function.
* 4. explicit binding - 'this' is explicit whenever the 'call' or 'apply' methods are used.
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2
const me = {
    name: 'Alex',
    sayName: function(){
        console.log(this.name)
    }
}

me.sayName()
// code example for Implicit Binding

// Principle 3
function Animal(animal, name) {
    this.animal = animal,
    this.name = name,
    this.whatIsIt = function(){
        console.log(`"this" in this context refers to a ${this.animal} named ${this.name}`)
    }
}

let chicken = new Animal("chicken", "alex")
let dog = new Animal("dog", "brutus")
chicken.whatIsIt()
dog.whatIsIt()
// code example for New Binding

// Principle 4
const sayName = function(){
     console.log(`my name is ${this.name}`);
}
const pm = {
    name: "brandon"
}

sayName.call(pm)

// code example for Explicit Binding