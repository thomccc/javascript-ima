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

