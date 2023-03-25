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

// You can push unto the array but not redefined it

fruits[3] = 'Mango';
// Best way
fruits.push('PineApple');

// Add to the begining
fruits.unshift('Grapes');

// remove last item form array

fruits.pop();

// check if something is in the array

console.log(Array.isArray('hat'));

// postion in the array

console.log(fruits.indexOf('Grapes'));

console.log(fruits[1]);

// Object Literal

const person = {
  firstName: 'Matthew',
  lastName: 'Powell',
  age: 14,
  hobbies: ['music', 'coding', 'movies'],
  address: {
    street: 'Red Bank',
    parish: 'Saint Elizabeth',
  },
};

console.log(person.firstName);

// You can multi log in the conssole with a comma

console.log(person.firstName, person.lastName, person.age);

// get movies and street
console.log(person.hobbies[2], person.address.street);

// Put these out to make them variables

// If it is a ebbedded object like addrees

const {
  firstName,
  lastName,
  address: { street, parish },
} = person;

console.log(firstName, lastName, street, parish);

// Add things
person.emotion = 'happy';
person.hobbies.push('games');
person.hobbies.unshift('playing outside');
person.address.email = 'nowgeforce@gmail.com';

console.log(person);

const todos = [
  {
    id: 1,
    text: 'Wash clothes',
    isComplete: true,
  },
  {
    id: 2,
    text: 'Take out trash',
    isComplete: true,
  },
  {
    id: 3,
    text: 'Cook',
    isComplete: false,
  },
];

// Excerise console llog text

console.log(todos);

console.log(todos[0].text);

console.log(todos[1].text);

console.log(todos[2].text);

// send data to a sever

const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

// For
// variable, condition to be met, increment or decrement

for (let x = 0; x <= 10; x++) {
  // anything in here is going to run until x is greater than or equal to ten
  console.log(`The For Loop Number Is: ${x}`);
}
// while
let i = 0;
while (i <= 10) {
  console.log(`This is a While Loop: ${i}`);
  i++;
}
