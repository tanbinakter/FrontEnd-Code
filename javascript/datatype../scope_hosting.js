// javascript scope

//scope 2 rokom
// 1. global scope
// 2. local scope

//local scope 2 rokom
// 1. function scope
// 2. block scope

// block scop== {} er modde je kono variable declare kora hole seta block scope hoye jai
//  function== function er modde je kono variable declare kora hole seta function scope hoye jai

// global scope er kaj holo sob jayga theke access kora jai
let a = "bentley";
console.log(a); // 10

//local scope er kaj holo sudhu {}block er  modde access kora jai

if (true) {
  console.log(a);
  let b = "R15";
  console.log(b);
}

function firstName() {
  let cycle = "Duronto";
  console.log(cycle);

  function lastName() {
    let furits = "Mango";
    console.log(furits);
  }

  lastName();
}

firstName();
// console.log(b);
//jeheto local scope block er modde declare kora hoyeche, tai block er baire theke access kora jabe na

// javascript Hosting
