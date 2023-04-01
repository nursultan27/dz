// let number = 1;
// console.log(number + 1);

// while (number <= 12) {
//   console.log(number);
//   number += 2;
// }
// let result = 1;
// let counter = 0;

// while (counter < 10) {
//   result = result * 2;
//   counter = counter + 1;
// }
// console.log(result);
// let name = null;
// do {
//   name = prompt("imya");
// } while (!name);
// for (let counter = 0; counter < 10; counter = counter + 1) {
//   console.log(counter);
// }
// let hash = ''
// for (let i = 0 i <= 8 i++) {
// hash +='#'
// let
////////////////
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
//////////////
let doska = 8;
let pustaya = "";

for (let i = 0; i < doska; i++) {
  for (let x = 0; x < doska; x++) {
    if ((x + i) % 2 == 0) {
      pustaya += " ";
    } else {
      pustaya += "#";
    }
  }
  pustaya += "\n";
}

console.log(pustaya);
