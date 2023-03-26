// DOM Selector

/* Mostly use queryselector and queryselectorall and sometimes getelementid */

// Single element
const form = document.getElementById('my-form');
const container = document.querySelector('.container');

// Multiple element

// console.log(document.querySelectorAll('.item'));
// only select classes
// console.log(document.getElementsByClassName('item'));
// tags
// console.log(document.getElementsByTagName('li'));

const ul = document.querySelector('.items');

// One of the method
// ul.remove();

// Remove the last element child of ul
// ul.lastElementChild.remove();

// Remove the first element child of ul
// ul.firstElementChild.remove();

// Changes the text content of the first ul element
ul.firstElementChild.textContent = 'User One';
// Selects the second one
ul.children[1].innerText = 'User Two';
ul.lastElementChild.innerHTML = '<h3>User Three</h3>';

//Styles

const btn = document.querySelector('.btn');

btn.style.background = 'red';
btn.style.fontWeight = '900';
