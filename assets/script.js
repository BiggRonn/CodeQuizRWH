var $startButton = document.querySelector("#startbutton");
var $questionWindow = document.querySelector("#questionwindow");
var $answerA = document.querySelector("#a");
var $answerB = document.querySelector("#b");
var $answerC = document.querySelector("#c");

var $timerElement = document.querySelector("#timer");
var $highScore = document.querySelector("#highscore");
var $scoreBoard = document.querySelector("#scoreboard");

var timeLeft;

var userScore = 0;

var questionCount = 0;//variable for storing which question the user is on and cycling through array of ?s


//this is an array of "question objects". Properties: question, answers, correct answer
var myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Who won the World Series for Major League Baseball in 2001?",
    answers: {
      a: "New York Yankees",
      b: "Los Angeles Dodgers",
      c: "Arizona Diamondbacks"
    },
    correctAnswer: "c"
  },
  {
    question: "What college did World Series co-MVP Curt Shilling pitch at?",
    answers: {
      a: "Arizona State University",
      b: "Yavapai Community College",
      c: "University of Arizona",

    },
    correctAnswer: "b"
  },
  {
    question: "How many NBA Championships have the Phoenix Suns won?",
    answers: {
      a: "0",
      b: "3",
      c: "7",

    },
    correctAnswer: "a"
  },
  {
    question: "Which pitcher hit a flying bird with a fastball during a MLB game?",
    answers: {
      a: "Randy Johnson",
      b: "Roger Clemens",
      c: "Zach Greinke",

    },
    correctAnswer: "a"
  }

]


function jsQuiz() {
  startTimer();
  giveQuestions();

  $answerA.addEventListener("click", checkAnswer);
  $answerB.addEventListener("click", checkAnswer);
  $answerC.addEventListener("click", checkAnswer);

    
 
}


function checkAnswer(){
 

if (myQuestions[questionCount].correctAnswer === this.id){
  userScore += (1000 * timeLeft);
 

} else {
  timeLeft -= 2;

}

questionCount++;

if (questionCount < myQuestions.length); 
giveQuestions();


}

function gameOver(){
  $questionWindow.textContent = userScore +" POINTS!";
  
    
  
  $answerA.textContent = "";
  $answerB.textContent = "";
  $answerC.textContent = "";

  console.log("GAMEOVER!!!");

  



}

//count parameter takes a number and acceses that index in the myQuestions array
function giveQuestions(){
  

  $questionWindow.textContent = myQuestions[questionCount].question;
  $answerA.textContent = myQuestions[questionCount].answers.a;
  $answerB.textContent = myQuestions[questionCount].answers.b;
  $answerC.textContent = myQuestions[questionCount].answers.c;

  
}


function startTimer() {
  timeLeft = 10;

  $startButton.disabled = true;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 0) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      $timerElement.textContent = timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      $timerElement.textContent = '';
      gameOver();
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);


    }
  }, 1000);
}

var startTest = $startButton.addEventListener("click", jsQuiz);
if (timeLeft < 1){
  gameOver();
}

console.log(startTest);

/*

LOGIC
click the start button
    timer starts and I am presented with a question

    answer a question
        presented with another question

    answer a question incorrectly
        time subtracted

no more questions or the timer reaches 0
    game is over
        ask for user initials
        save initials and score


VARS
array for questions

*/