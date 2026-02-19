document.getElementById("title").innerText = "This is javascript datatype";
// javascript datatype 8 prokar.
// string
// number
// boolean
// null
// undefined
// object
// symbol
// bigint

let name = "Bangladesh"; // string
let population = 170000000; // number
let isIndependent = true; // boolean
let capital = null; // null
let language; // undefined
let country = { name: "Bangladesh", capital: "Dhaka" }; // object
let uniqueId = Symbol("id"); // symbol
let bigNumber = 9007199254740991n; // bigint

console.log(typeof name); // string
console.log(typeof population); // number
console.log(typeof isIndependent); // boolean
console.log(typeof capital); // object (this is a known quirk in JavaScript)
console.log(typeof language); // undefined
console.log(typeof country); // object
console.log(typeof uniqueId); // symbol
console.log(typeof bigNumber); // bigint

let fruit = ["mango", "banana", "apple"]; // array object
console.log(fruit[1]);
console.log(typeof fruit); // object

//javascript oprator precedence
// () {} [] / * - +
// == === != !== > < >= <=
// && || !

let aa = 10;
let bb = 5;
let cc = 25;
console.log(aa + (bb * cc) / aa - bb);

console.log(aa ** cc);

// javascript conditional statement with precedence

console.log(aa > bb && bb > cc);

if (aa > bb && bb < cc) {
  console.log("First Class");
} else {
  console.log("Second Class");
}

// javascript function  ****javascript e function k 3 vabe call kora jay****
// 1..code-diven invocation
// 2..event-driven invocation
// 3..automatic(self) invocation

// 1..code-driven invocation*************
function myFunction(fullName, age, address, dateOfBirth = 1900) {
  console.log(
    "hellow this is me " +
      fullName +
      " i am " +
      age +
      " i liv in " +
      address +
      " my date of birth is " +
      dateOfBirth,
  );
}
// function cal

myFunction(" shibli", 25, "bogura", 2001);
myFunction(" Tanbin", 22, "jashore", 2004);

function ageCalculator(birthYear) {
  let currentYear = 2026;

  let age = currentYear - birthYear;
  console.log("Age is: " + age);
}

ageCalculator(2004);

// 2..event-driven invocation**************
function isSubscribed() {
  console.log("user subscribed successfully");
}
// document.getElementById("btn").addEventListener("click", isSubscribed);

// 3..automatic(self) invocation************
//eta nijei function kei call kore dei

(function (message) {
  console.log("Hellow This is", message);
})("me self invoked function");

//*************function expression************
let maths = function (x, y) {
  return x + y;
  //ekta function er vitor multiple return use kora jay na
  // return x - y;
  // return x * y;
  // return x / y;
  // return x % y;
  // return x ** y;
  // return x++;
};
console.log(maths(20, 30));
console.log(maths(22, 30));
console.log(maths(10, 20));
console.log(maths(40, 30));
console.log(maths(40, 30));
console.log(maths(20, 30));
console.log(maths(20, 30));

//******************anonymous function*************
// let numbers = [1, 2, 3, 4, 5];
// let sqNumbers = numbers.map(function (number) {
//   return number * number;
// });
// console.log(numbers);
// console.log(sqNumbers);
let numbers = [2, 4, 6, 5, 8, 9, 10];
let dsNumbers = numbers.map(function (number) {
  return number + number;
});
console.log(dsNumbers);

//******************arrow function*************
//1..arrow function diye 1 line er function kora jay
//2..jodi function er vitor ekadhik line thake tahole curly braces use korte hoy
//3..jodi return statement use korte hoy tahole curly braces er bahire use korte hoy
//4..jodi ekadhik parameter thake tahole parameter guloke parenthesis er vitor rakhte hoy
//5..jodi ekta parameter thake tahole parenthesis use kora lage na
//6..arrow function er vitor this keyword use kora jay
//7..arrow function er vitor arguments object use kora jay na
//8..arrow function er vitor super keyword use kora jay na
//9..arrow function er vitor new keyword use kora jay na
//10..arrow function er vitor prototype property use kora jay na
//11..arrow function er vitor constructor use kora jay na
//12..arrow function er vitor yield keyword use kora jay na
//13..arrow function er vitor async keyword use kora jay na
//14..arrow function er vitor generator function use kora jay na
let add = (x, y) => x + y;
console.log(add(50, 70));

let divition = (a, b) => a * b;
console.log(divition(55, 10));

//***********nested function*************

// function greet(firstName) {
//   function sayHellow()
//     console.log("Hellow ", +firstName);
//   }
//   return sayHellow();
// }
// greet("Tanbin");
// javascript object*******************

const newSymbl = Symbol("number1");
const mobailModel = {
  //key:value
  name: "samsung",
  brand: "s22 ultra",
  price: 95000,
  color: "black",
  storage: "256gb",
  ram: "8gb",
  // this is arry object
  camera: ["50mp", "10mp", "12mp"], // array object ey vabe nite hoi..
  battery: "5000mah",
  zoomCamera: true,
  [newSymbl]: "This is my number1 value", // symbol er value nite ey vabe korte hoi
};
mobailModel.brand = "s25 ultra";
Object.freeze(mobailModel); // object ke freeze kore deya jay jate tar value change na hoy

mobailModel.hasOwnProperty("camera"); // object er property check korar jonno
console.log(mobailModel.hasOwnProperty("camera")); //api object er property check korar jonno ey vabe korte hoy

console.log(mobailModel.brand);
console.log(mobailModel);
//console.log(mobailModel.name);
// console.log(mobailModel.camera[1]);
// console.log(mobailModel["brand"]); string hole kotetion er vitor nite hoi

console.log(Object.keys(mobailModel)); // object er key gulo dekhay
console.log(Object.values(mobailModel));

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj2 = {
  p: 1,
  q: 2,
  r: 3,
};

const obj3 = {
  x: 1,
  y: 2,
  z: 3,
};

const objectFinal = Object.assign({}, obj1, obj2, obj3); // object gulo ke merge kore ekta object e convert kore..ekta empty object er vitor

//console.log(obj1, obj2);// object gulo ke alada alada dekhay
// console.log(...obj1, ...obj2, ...obj3); // object gulo ke spread operator diye alada alada dekhay

const finalObject = Object.assign(obj1, obj2, obj3);
// object gulo ke merge kore ekta object e convert kore
//tobe eta memory efficient na..karan eta prothom object er value gulo ke change kore dey..tai spread operator use kora valo
console.log(objectFinal);

//larn javascript arrays****************************

const language1 = [
  "Html",
  "Html",
  "css",
  "javascript",
  "Tailwind",
  "bootstrap",
  "react",
  true,
  55,
];

language1[4] = "php"; // array er value change kora jay index diye
language1[0] = "index.html"; // array er value change kora jay index diye
console.log(language1);
// console.log(language1.toString()); //arry ke string e convert kore dekhate ey vabe likhte hoy
//console.log(language1.length);//array er modde koyta element ache ta dekhay
//console.log(language1.join( $"",-")); //array er element guloke join kore dekhay..element gulor modde ja dite cai seta diye join kore dey
