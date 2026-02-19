/*************click event***************
function subscribe() {
  document.getElementById("text").innerHTML = "Subscribed Now"; // html element er text change kore deya jay
}
// html element er text change kore deya jay

subscribe();

function information() {
  document.getElementById("btn3").innerHTML = "Login Successfull";
  document.getElementById("btn3").style.backgroundColor = "black"; //evabe style addd korte hoi javascript er vitore
}

// event er best practise holo js file ey onclick event add kora..

// document.getElementById("btn2").onclick = function () {
//   document.getElementById("text").innerHTML = "Subscribed Now";
//   document.getElementById("btn2").style.backgroundColor = "black";
// };

//!javascript e ekdom best practise holo eventlistener diye event add kora..karan eta diye multiple event add kora jay ekta element er vitor..onclick diye ekta element er vitor ekta event add kora jay..onclick diye multiple event add kora jay na

// document.getElementById("btn2").addEventListener("click", function () {
//   document.getElementById("btn2").innerHRML = "successfully done";
// });




function like() {
  document.getElementById("btn4").innerHTML =
    " <i class='fa-solid fa-thumbs-up text-3xl'></i> liked"; //double quote er vitor single quote use kore html element er modde icon add kora jay
}
//onclick
//ondblclick **jodi konokisuk double click kore tahole event kaj korbe
//oncontextmenu **jodi konokisuk right click kore tahole event kaj korbe

//onmouseover===
//onmouseout ===jokhon konokisuk mouse diye kono element er upore asbe tokhon onmouseover event kaj korbe..ar jodi mouse diye element er baire asbe tahole onmouseout event kaj korbe
//onkeydown
//onkeyup
//onkeypress
//onchange
//onsubmit
//javascript e ey event gula diye click option degaine kora hoi

// onkeypress ***********************

/*onkeypress event***********
   onkeyeup event ***********
   ey event use korle key press korle enent kaj kore -->
   <!-- ey event form r body te kaj kore er bayre kaj kora na */

document.getElementById("submitBtn").addEventListener("click", function () {
  document.getElementById("submitBtn").innerHTML = "form submitted";
});
function keyPress() {
  document.getElementById("text2").innerHTML = "key is pressed";
}

function keyUp() {
  document.getElementById("text2").innerHTML = "key is released";
}

function keyChange() {
  document.getElementById("text2").innerHTML = "input value is changed";
}

// onkeypress event form r body te kaj kore er bayre kaj kora na

// javascript math  korar niyom************
//(.) dosomic man nirnoy with javascript Math.

let num1 = 31.946848; //dosomic er pore jodi 5 er besi thake tahole 1 jog hoye bose. r jodi 5 er kom hoi tahole just j songkha thake (.) er age setay purno songkha akare bose jay..
// punno songkha chayle math.round() use korte hoi
console.log(Math.round(num1)); //10

let num2 = 50.0;
console.log(Math.round(num2));
//Math.ceil() er kaj holo (.) er pore j sonkhay thakuk na kno ceil use korle purno songkhar sathe 1 jog hoye bose jay.r jodi (.) er pore sob gula man 0 thake r kono man na tahke tahole (.) er age j songkha thakbe ty purno sonkha akare bose jabe.
console.log(Math.ceil(num2));
//Math.floor() er kaj holo (.) er pore j sonkhay thakuk na kno floor use korle (.) er age j songkha thakbe ty purno sonkha akare bose jabe ..
console.log(Math.floor(num2));

//*******javascript squre value nirnoy niyom */
//Math.pow(number, power);
console.log(Math.pow(3, 2));

//*********Root Value **eta diye javascript er root value nirnoy kora jay*/
console.log(Math.sqrt(64));
// console.log(22 / 7); PI er man 22/7 othoba 3.143
//Math.abs()********er kaj holo kono sonkha positive nirnoy kora . jodi man nagetive o hoi taw man possitive dekhabe...
console.log(Math.abs(-10)); // nagatiove number deya tobuo possitive number dekhabe

//Math.min()******er kaj holo kono sonkhar minimum valu nirnoy kora.
console.log(Math.min(1, 2, 3, 4, 5, 6, 7));

//Math.max()******er kaj holo kono sonkhar maximum valu nirnoy kora.
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//Math.PI******er kaj holo pi er value nirnoy kore...
console.log(Math.PI);

//******javascript signe cos valu nironoy er niyhom */
console.log(Math.sin((60 * Math.PI) / 180));
console.log(Math.cos(45 * Math.PI) / 180);

//*****javascript Random number */
console.log(Math.random()); //0 theke 1 er modde random number generate kore

//******javascript string */
const quatation = 'bill gates says  \n "some taxt"';
//****javascript e kon line er modde break chyle \n use korte hoi */

document.getElementById("billgate").innerText = quatation;
console.log(quatation);

let info1 = "Shibli Prodhan";
let info2 = "Tanbi Islam";

//let information = "shibli prodhan " + "Tanbi Islam"; // 2 ta string ke ek sathe jora kore likhte  chyle + operator use kore evabey likhte hoy

let information = info1 + "  " + info2; //2 ta variable diye o ek line e lekha jay
console.log(information);

//javascript e string er length ber korar niyom
let name1 = "shibli prodhan";
console.log(name1.length);

// javascript e string er kono specific character ber korar niyom
let name2 = "shibli Tanbi";
console.log(name2[5]); //ekhane output i asbe karon countiong 0 theke suru hoy

//javascript number *************
let num3 = 9999999999999999; //javascript e number er limit 16 digit  16 digit er besi numbet deya hole 16 digit er porer sonkha gulo 0 akare bose jay..karan javascript e number er limit 16 digit

console.log(num3);

//javascript date and time******
let today = new Date();
console.log(typeof today);
console.log(today.toDateString());

// let updateDate = new Date(2026, 1, 8, 2, 58);
let updateDate = new Date("2026-02-08 2:58:00");
console.log(updateDate);
