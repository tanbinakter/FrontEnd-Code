// we larn javascript Higher order arry loop

//for loop
//for(variable name = initial value; condition; increment/decrement){code to be executed}

let fruits = ["apple", "banana", "grapes", "orange", "mango"];

for (let fruit = 0; fruit < fruits.length; fruit++) {
  // console.log(fruits[fruit]);
}

//for of loop
//for(let variable of object){code to be executed}

for (let fruit of fruits) {
  // console.log(fruit);
}

// database theke amra data niye asbo then amra oi data te loop chalabo
// forEach loop diye amra array er prottek element er upor loop chalate pari( besi use kori)

//forEach loop
//arrayName.forEach(function(currentValue, index, array){code to be executed})
// // fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// *****************arrow function diye forEach loop***********************

// fruits.forEach((fruit) => {
//   console.log(fruit);
// });
//evabeo lekha jay arrow function diye forEach loop

function myFruit(fruit) {
  console.log(fruit);
}
fruits.forEach(myFruit);

const stack = [
  {
    name: "MARN Stack",
    property: "MongoDB, ExpressJS, ReactJS, NodeJS",
    foundation: "javascript",
    tranding: true,
    price: 5000,
  },
  {
    name: "Laravel Stack",
    property: "Javascript, vue, laravel, MySQL",
    foundation: "PHP",
    tranding: false,
    price: 3000,
  },
  {
    name: "wordpress Stack",
    property: "javascript, php, wordpress, MySQL",
    foundation: "PHP",
    tranding: true,
    price: 4000,
  },
  {
    name: "Django Stack",
    property: "python, django, MySQL",
    foundation: "python",
    tranding: true,
    price: 6000,
  },
];
// stack.forEach((stack) => {
//   console.log(`went to learn ${stack.name}  and it has ${stack.property}`);
// });

// larn javascript filter map loop reduce*************************
// const fruitCapB = fruits.filter((fruit) => fruit.toLowerCase().startsWith("b"));//ey method diye amra capital lettar ba small letter diye
// console.log(fruitCapB);

const fruitCapB = fruits.filter((fruit) =>
  fruit.toLocaleLowerCase().startsWith("b"),
);
console.log(fruitCapB);

//filter method diye amra word er lenth ba word onujayi filter korte pari

const fruitsLength5 = fruits.filter((fruit) => fruit.length === 6);
console.log(fruitsLength5);

//************filter method diye amra basay korte pari specific kono word diye*/
const fruitStartG = fruits.filter((fruit) => fruit.toLowerCase().includes("g"));

console.log(fruitStartG);

//******filter diye nmbr er modde soto boro basay kora jay... */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const bigNumber = numbers.filter((number) => number < 7);
console.log(bigNumber);
//**********forEach loop diye o same filtar ta kora jay******* */
const forNums = [];
numbers.forEach((num) => {
  if (num < 7) {
    forNums.push(num);
  }
});
// console.log(forNums);

//**************** Use map method to transform arry elements*/
//1...map method nile (m) sotohater m hobe r jokjon map k declare korbo tokhon amra (M) M boro hater likhte hobe

const myNum = numbers.map((num) => num + 5);
console.log(myNum);
