//*************larn javascript condition************* */
// javascript condition
// if else statement
// switch statement

/**
 * if (condition) {
 *  // code to be executed if condition is true
 * } else if (condition) {
 *  // code to be executed if condition is false
 * } else {
 *  // code to be executed if both condition is false
 * }
 *
 */

let age = 20;
if (age > 18) {
  console.log("you are eligible for vote");
} else {
  console.log("you are not eligible for vote");
}

let day = "monday";

if (day === "saturday") {
  console.log("today is meeting");
} else if (day === "monday") {
  console.log("today is working day");
} else if (day === "tuesday") {
  console.log("today is office trip day");
} else day === "friday";
{
  console.log("today is holiday");
}

// switch statement

/* switch (expression) {
 *  case value1:
 *    // code to be executed if expression === value1
 *    break;
 *  case value2:
 *    // code to be executed if expression === value2
 *    break;
 *  default:
 *    // code to be executed if expression doesn't match any case
 * }
 */

// larn object and array in javascript
let person = {
  name: "shibli",
  age: 24,
  city: "dhaka",
  country: "bangladesh",
};

let fruits = ["apple", "banana", "orange", "grape", "mango"];

console.log(person.name);
console.log(fruits[2]);
//******************************************************************************** */
//javascript e 2 vabe  memory management kora hoy..
//call stack and heap
//***********call stack**************
// premitive data type
// number, string, boolean, null, undefined

/* ************heap**************
// non-premitive data type gulo store hoy.. 
! object, array, function */
