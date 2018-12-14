

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