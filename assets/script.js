var $startButton = document.querySelector("#startbutton");
var $questionWindow = document.querySelector("#questionwindow");
var $answerA = document.querySelector("#answerA");
var $answerB = document.querySelector("#answerB");
var $answerC = document.querySelector("#answerC");

var $timerElement = document.querySelector("#timer");
var $highScore = document.querySelector("#highscore");
var $scoreBoard = document.querySelector("#scoreboard");

var timeLeft;


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
    question: "JavaScript is a ____-side programming language.",
    answers: {
      a: "Client",
      b: "Server",
      c: "Both"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the HTML tag under which one can write the JavaScript code?",
    answers: {
      a: "<style>",
      b: "<script>",
      c: "<javascript>",

    },
    correctAnswer: "b"
  },
  {
    question: "Which was released first, JavaScript or CSS?",
    answers: {
      a: "JavaScript",
      b: "CSS",
      c: "Released simultaneously",

    },
    correctAnswer: "a"
  }

]


function jsQuiz() {
  startTimer();
  giveQuestions();


}

function giveQuestions(){
  var count = 0;

  $questionWindow.textContent = myQuestions[count].question;
  $answerA.textContent = myQuestions[count].answers.a;
  $answerB.textContent = myQuestions[count].answers.b;
  $answerC.textContent = myQuestions[count].answers.c;


}

function startTimer() {
  timeLeft = 10;

  $startButton.disabled = true;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      $timerElement.textContent = timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      $timerElement.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);


    }
  }, 1000);
}

$startButton.addEventListener("click", jsQuiz);

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