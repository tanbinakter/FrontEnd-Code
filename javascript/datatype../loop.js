// javascript loop

// loop 5 rokom
// 1..for loop
// 2..while loop
// 3..do while loop
// 4..for in loop
// 5..for of loop
// for loop

// *************** for loop syntax********************nirdisto sonkhok bar kono kaj korar jonno for loop use kora hoy

// abr for loop diye arry er value gula print kora hoy... for loop er moddhe 3 ta part thake...
// 1..variable declare kora hoy...
// 2..condition deya hoy..
// 3..increment/decrement deya hoy...

// let name =[array name];
// for ( variable; condition; increment/decrement){
//     code to be executed // console.log(name[i]);
// }

let car = ["BMW", "Audi", "Mercedes", "Lexus", "Toyota"];

for (let i = 0; i < car.length; i++) {
  console.log(car[i]);
}

// ********************** for in -loop********************object er value gula print korar jonne (for in) loop use kora hoy...

// for (variable name in object){
//     code to be executed
// };
let person = {
  name: "Tanbin",
  age: 23,
  city: "Dhaka",
  job: "web Developper",
};
for (let i in person) {
  // console.log(i); // i te key gula print hobe
  // console.log(person[i]); // person[i] te value gula print hobe
  let capLetter = i.charAt(0).toUpperCase() + i.slice(1); // i.charAt(0) te i er first letter ta nibe and toUpperCase() te capital letter e convert korbe and + i.slice(1) te baki letter gula add korbe
  console.log(capLetter + ":" + person[i]); // i te key gula print hobe and person[i] te value gula print hobe
}

// *********************forEach method**********************forEach method array er value gula print korar jonne use kora hoy... forEach method array er prottekta element er jonno ekbar function call kore...

// arrayName.forEach(function(currentValue, index, array){
//     code to be executed
// });

car.forEach(function (i) {
  console.log(i);
});

// **********************for of loop********************array er value gula print korar jonne (for of) loop use kora hoy...
// for (variable key of object)){
//     code to be executed
// };

for (let i of car) {
  console.log(i);
}

// *************while loop******************while loop er maddhomeo kono kaj bar bar kora jay.. while loop er syntax holo
// while (condition){
//     code to be executed
//  name++
// }

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
