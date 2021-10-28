// the js way
// chapter 3 days in a month *tested in jsbin

const month = Number(prompt("Enter a month:"));
const year = Number(prompt("Enter a year:"));

function daysInMonth (month, year) {
  return new Date(year, month, 0).getDate();
}

console.log(daysInMonth(`${month}`, `${year}`));



// chapter 4 fizzbuzz

for (let i=1; i <= 100; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}


// chapter 5 improved hello

let firstName = prompt("first name") ;
let lastName = prompt("last name") ;

function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  console.log(message);
}

sayHello(firstName, lastName);

