//User theke unput nilam

let difficulty = prompt(
  "Choose  difficulty (easy, medium, hard)",
).toLowerCase();
//user jemon e dik na kno lower case e convert kore nite ey .toLowerCase() use kora hoyeche.

guessTheNumber(difficulty);
// console.log(difficulty);

//Guess The Number Function

function guessTheNumber(difficulty) {
  let randomNumber;
  let attamps = 0;
  let maxAttamps;
  let range;

  //set diffculty-based parameters
  switch (difficulty) {
    case "easy":
      range = 10;
      maxAttamps = 5;
      randomNumber = Math.floor(Math.random() * 10) + 1;
      console.log(randomNumber);
      break;

    case "medium":
      range = 50;
      maxAttamps = 7;
      randomNumber = Math.floor(Math.random() * 50) + 1;
      console.log(randomNumber);
      break;

    case "hard":
      range = 100;
      maxAttamps = 3;
      randomNumber = Math.floor(Math.random() * 100) + 1;
      console.log(randomNumber);
      break;

    default:
      console.error(
        "invalid difficulty level. Please choose easy, medium, or hard.",
      );
  }

  //get user input chescsk guess
  while (attamps < maxAttamps) {
    let guess = parseInt(
      prompt(
        `guess a number between 1 and ${range},(Inclusive).you have ${maxAttamps - attamps} attempts left`,
      ),
    );
    attamps++;
    console.log(guess);
  }
}
