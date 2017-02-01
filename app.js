var myAnswerOne = "Russia";
var myAnswerTwo = 'KIA';
var myAnswerThree = "YES";
var myAnswerFour = "Sammamish";
var userName = prompt("What's your name?");
function guessingGame() {
  var answerOne = prompt("Let's start with an easy question. Where was I born?");
  if (answerOne === myAnswerOne){
    alert("Correct! I was born in Russia");
  }
  else{
    alert("Ups!.. Wrong. I was born in Russia");
  }
  var answerTwo = prompt("What car do I drive");
  if (answerTwo.toUpperCase() === myAnswerTwo){
    alert("Correct! I drive a Kia Sportage");
  }
  else{
    alert("Ups!.. Wrong. I drive a Kia Sportage");
  }
  var answerThree = prompt("Do I have children?");
  if (answerThree.toUpperCase() === myAnswerThree){
    alert("Correct! I have two kids");
  }
  else{
    alert("Ups!.. Wrong. I have two kids");
  }
  var answerFour = prompt("Where do I live now?");
  if (answerFour === myAnswerFour){
    alert("Correct! I live in Sammamish");
  }
  else{
    alert("Ups!.. Wrong. I live in Sammamish");
  }
  var Cities = ["New York", "London", "Paris", "Rome"];
  var myCity =prompt("Name one of my favorite cities:");
  if (Cities.indexOf(myCity)!= -1) {
    alert("You got it! " + myCity + " is one of my favorite cities");
  }
  else{
    alert("Not my favorite.  Paris is everyone's safe bet :)");
  }
}
alert ("Hello " + userName + ' Thanks for visiting my site!');
var game = prompt("Would you like to play a guessing game? Yes/No");
if ((game === "y") || (game === "Y") || (game ==="Yes") || (game === "yes")){
  //Guessing Game

guessingGame();
}
else {
  alert("Nice meeting you!");
}
