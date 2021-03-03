var $startButton = document.querySelector("#startbutton");
var $quizWindow = document.querySelector("#window");
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
  }

]


function jsQuiz() {
  

  }

function startTimer() {
    timeLeft = 10;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerElement.textContent = '';
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