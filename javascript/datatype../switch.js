//switch case
//switch case diye result pring korar code

/**
 * switch (true) {
 *  case condition1:
 *   // code to be executed if condition1 is true
 *    break;
 *  case condition2:
 *   // code to be executed if condition2 is true
 *    break;
 *  default:
 *   // code to be executed if both condition1 and condition2 are false
 * }
 */

let result = 50;

let grade;

switch (result) {
  case 90:
    grade = "A+";
    break;
  case 80:
    grade = "A+";
    break;
  case 70:
    grade = "A";
    break;
  case 60:
    grade = "B";
    break;
  case 50:
    grade = "c";
    break;
  default:
    grade = "F";
    break;
}
console.log(`your grade is ${grade}`);

//switch case diye gread ber korar best way

let result1 = 72;
let grade1;

switch (true) {
  case result1 >= 70 && result1 <= 100:
    grade1 = "A+";
    break;

  case result1 >= 60 && result1 <= 70:
    grade1 = "A";
    break;

  case result1 >= 50 && result1 <= 60:
    grade1 = "A-";
    break;
  case result1 >= 40 && result1 <= 50:
    grade1 = "B";
    break;

  case result1 >= 33 && result1 <= 40:
    grade1 = "c";
    break;
  case result1 < 33:
    grade1 = "F";
  default:
    grade = "Invalid marks";
}

console.log("your grade is", grade1);
