// DOM Selector

/* Mostly use queryselector and queryselectorall and sometimes getelementid */

// Single element
// const form = document.getElementById('my-form');
// const container = document.querySelector('.container');

// Multiple element

// console.log(document.querySelectorAll('.item'));
// only select classes
// console.log(document.getElementsByClassName('item'));
// tags
// console.log(document.getElementsByTagName('li'));

// const ul = document.querySelector('.items');

// One of the method
// ul.remove();

// Remove the last element child of ul
// ul.lastElementChild.remove();

// Remove the first element child of ul
// ul.firstElementChild.remove();

// Changes the text content of the first ul element
// ul.firstElementChild.textContent = 'User One';
// Selects the second one
// ul.children[1].innerText = 'User Two';
// ul.lastElementChild.innerHTML = '<h3>User Three</h3>';

//Styles

// const btn = document.querySelector('.btn');
// const form = document.querySelector('#my-form');

// btn.style.background = 'red';
// btn.style.fontWeight = '900';

// btn.addEventListener('click', (e) => {
//   // it flash so you have to get rid of the default behavear
//   e.preventDefault();
//   btn.style.background = 'black';
//   form.style.background = 'orangered';
// });

// Working Application

const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const message = document.querySelector('.msg');
const userList = document.querySelector('#users');

form.addEventListener('submit', submit);

function submit(e) {
  e.preventDefault();
  if (nameInput.value === '' || emailInput.value === '') {
    // adding class to varible
    message.classList.add('error');
    message.textContent = 'Please Fill In Form';
    // make it dissappear after 3 seconds
    setTimeout(function () {
      message.remove();
    }, 3000);
  } else {
    console.log('Form Sented');
  }
}
