// Variable let, const, We don't use var anymore

// Use const unless you need to resign a variable

// let is redefinable
/*
let age = 40;
age = 20;

console.log(age);
*/

// Const is not redefinanle, You have to give const a valu
/*
const age = 40;
age = 20;

console.log(age);
*/

// String, Number, Boolean, Null, Undefined

/*
const name = 'Matthew';
const age = ' 14';
const isHappy = true;
const x = null;
const z = undefined;
//same as undefined
let a;

console.log(typeof name);
*/

// Concatenation
/*
const name = 'Matthew';
const age = ' 14';

// Old
console.log('My name is ' + name + ' and i am age' + age);

// Template String

// New

console.log(`My name is ${name} and am${age} years of age`);

const sentence = `My name is ${name} and am${age} years of age`;

console.log(sentence);

// Properties without parentheses, With method

console.log(sentence.length);

// A method is a object assgin to a object

console.log(sentence.toUpperCase());

console.log(sentence.toLowerCase());
*/

// Start and End

/*
console.log(sentence.substring(0, 8));

console.log(sentence.substring(0, 8).toUpperCase());

console.log(sentence.split(''));

const list = 'car, house, bar, gun, money';

console.log(list.split(','));
*/

// Array - array are essentially varaibles that can hold multiple variables

//when you see the new keyword and the array() were creating a constructing

const array = new Array(1, 2, 3, 4, 5, 6, 7, 8);

console.log(array);

// usally we use brakets

const fruits = ['Apple', 'Bananna', 'Coconut'];

console.log(fruits);

// The array starts counting form zero so thats why bananna is consoled

// you can push unto the array but not redefined it

fruits[3] = 'Mango';

console.log(fruits[1]);
