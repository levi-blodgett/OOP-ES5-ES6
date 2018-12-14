

//////////////////
// TYPES OF VARIABLES
//////////////////


// Person Object Literal
// Not good for multiple instances of objects
const levi = {
  name: 'Brad',
  age: 30
}

console.log(levi);
console.log(levi.name);


// Person Constructor
// Constructors have to be started with a capital letter
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const jess = new Person('Jessica', '12-8-1996');
const tyler = new Person('Tyler', '1-1-1995');

console.log(jess);
console.log(tyler.calculateAge());

// When 'this' is in the global scope then it pertains to the Window object


//////////////////
// BUILT-IN CONSTRUCTORS, STAY AWAY FROM THESE ALMOST ALWAYS
//////////////////


// String
// Not really any reasons to make a string an object as well, but you can
const name1 = 'Jeff';
const name2 = new String('Jeff');

console.log(name1);
console.log(name2);
name2.foo = 'bar';
console.log(name2);
console.log(name1 + ' ' + name2);

// Logs yes because it is just a simple string
if (name1 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}

// Logs no because it is an object technically, not a string as a type
if (name2 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(num1);
console.log(num2);
console.log(typeof num2); // logs object

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1);
console.log(bool2);
console.log(typeof bool2); // logs object

// Function
const getSum1 = function(x, y) {
  return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');

// Object
const john1 = {name: 'John'};
const john2 = new Object({name: 'John'});

console.log(john1);
console.log(john2);
console.log(typeof john2); // logs object

// Array
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

console.log(arr1);
console.log(arr2);
console.log(typeof arr2); // logs object

// Regular Expressions
const re1 = /\w+/; // Looking for a word character that shows up 1 or more times
const re2 = new RegExp('\w+'); // Doesn't work, we need backslash, so see re3
const re3 = new RegExp('\\w+'); // Will work when re2 won't because we have to use backslash to escape the quotes as well

console.log(re1);
console.log(re2);
console.log(re3);
console.log(typeof re3); // logs object