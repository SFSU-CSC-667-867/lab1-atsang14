// Declaring with the function keyword
// avoid because function hoisting
function hi() {
  console.log('Say Hello');
}

hi();

// arrow functions
const arrow = (test) => {
  console.log(test);
}

arrow('hi');

// for practice


// make an arrow function with no block body
const myArrow = (y) => y + 1;
// { return y + 1} this is the same
console.log(myArrow(8));

// make a function that returns a function
const funcionFactory = () => () =>  console.log('this is weird')

const a = funcionFactory();
a();

const anotherFunction = funcionFactory;
anotherFunction()();


