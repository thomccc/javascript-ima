/*
List of desserts
*/

document.getElementById("buttonOne").addEventListener("click", () => {

const countElements = selector => document.querySelectorAll(selector).length;

let writeOne = countElements("h2");

document.getElementById("informationOne").innerHTML = `There are ${writeOne} same HTML elements.`;

});


document.getElementById("buttonTwo").addEventListener("click", () => {

const countFirstId = selector => document.querySelectorAll(selector).length;

let writeTwo = countFirstId("#groupOne h2");

document.getElementById("informationTwo").innerHTML = `There are ${writeTwo} elements in first ID.`;

});

document.getElementById("buttonThree").addEventListener("click", () => {

const countSecondId = selector => document.querySelectorAll(selector).length;

const writeThree = countSecondId("#groupTwo h2");

document.getElementById("informationThree").innerHTML = `There are ${writeThree} elements in second ID.`;

});

const button = document.querySelector('#submitButton');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
let spinner = document.querySelector('.loader');


function passwordValidation() {
  if (!password.value) {
    password.style.border = '2px solid';
    password.style.borderRadius = '5px'
    password.style.borderColor = '#dc3545';
  }
  else {
    password.style.border = 'none';

  }
}

const validateEmail= (email) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function emailValidation() {

  if (validateEmail(email.value)){
        button.style.visibility = "hidden";
        email.style.border = `none`;
        email.style.borderRadius = `none`;
        spinner.style.visibility = `visible`;
  }
  else{
    email.style.border = '2px solid';
    email.style.borderRadius = '5px'
    email.style.borderColor = '#dc3545';
    }

}


button.addEventListener('click', e => {
  e.preventDefault();
  passwordValidation();
  emailValidation();



});



