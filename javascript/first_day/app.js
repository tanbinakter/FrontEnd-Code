console.log("hellow world");
document.getElementById("tanbin").innerHTML = "Hellow shilbi";
let sum = 10 + 70;
console.log(sum);

if (sum > 100) {
  console.log("This is expensive ");
} else {
  console.log("This is cheap");
}
// var is re-declarable
// var is re-assignable
// var is global scoped
// var is hoisted
// hoisted means you can use the variable before declaring it
// global scoped means if you declare a variable with var inside a block it will be accessible outside the block

var x = 20;
var x = 30;
console.log(x);

var y = 50;
y = 70;
console.log(y);

let fruits = "mango ";
console.log(`${fruits} is my favrate, ilike to  eat  ${fruits}`);

// let is not re-declarable
// let is re-assignable
// let has block scope
// let is not hoisted
let a = 20;
a = 40;
{
  console.log(a);
}

let b = 50;
b = 100;
{
  console.log(b);
}

console.log("");
// const variable
// const is not re-declarable
// const is not re-assignable
// const has block scope
// const is not hoisted

// const z = 90;
// const z = 120;
// console.log(z);

// javascript oparatior
// javascript e 5 prakor oparator ache

// arithmetic oparator
// assignment oparator
// comparison oparator
// logical oparator
// tanary oparator othoba // conditional oparator

// arithmetic oparator
let p = 30;
let q = 10;

let t = 5;
t++; // increment oparator
t--; // decrement oparator

let s = ++t; // pre-increment
let r = --t; // pre-decrement
console.log(p + q);
console.log(p - q);
console.log(p * q);
console.log(p / q);
console.log(p % q);
console.log(p ** q); // exponentiation oparator
console.log(t);

// assignment oparator

let c = 20;
c += 1;
console.log(c);
c -= 2;
console.log(c);
c *= 2;
console.log(c);
c /= 2;
console.log(c);
c %= 2;
console.log(c);
c **= 2;
console.log(c);

let userInput = prompt("Enter a number");
let number = parseInt(userInput);

if (number % 2 === 0) {
  console.log(`${number} this is even number`);
} else {
  console.log(`${number} this is odd number`);
}

// comparison oparator
let d = 50;
let e = "50";

console.log(d == e); // value check
console.log(d === e); // value and type check
console.log(d != e); // value check
console.log(d !== e); // value and type check
console.log(d > e); // greater than
console.log(d < e); // less than
console.log(d >= e); // greater than or equal to
console.log(d <= e); // less than or equal to

// logical oparator
// &&  (and)  || (or)  ! (not)
// example of && and ||
// both condition true then true otherwise false
// either condition true then true otherwise false
// example of !
// true then false
// false then true

let f = 20;
let g = 30;
console.log(f < 25 && g > 25);
console.log(f < 25 || g < 25);
!(f < g);

// assignment oparator
let m = 25;
let k = 10;
// m = m + k;
m += k;
m = m - k;
m -= k;
m = m * k;
m *= k;
m = m / k;
m /= k;
m = m % k;
m %= k;
m = m ** k;
m **= k;

console.log(m);
// tanary oparator //conditional oparator
let v = a > b ? "True" : "False";
console.log(v);

let shibli = "small";
let sabiha = "big";
let saju = "shibli" > "sabiha" ? "shibli is smaller" : "sabiha is bigger";
console.log(saju);

let o = 50;
let h = 50;
// if (o > h) {
//   console.log("big");
// } else {
//   console.log("small");

if (o === h) {
  console.log(true);
} else {
  console.log(false);
}
// javascript data type

// primitive data type
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol

// non-primitive data type
// 1. object

// number
let num1 = 20;
let num2 = 30.5;
console.log(typeof num1);
console.log(typeof num2);
