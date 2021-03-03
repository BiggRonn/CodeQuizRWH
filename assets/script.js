var $startButton = document.querySelector("#generate");
var $quizWindow = document.querySelector("#window");
var $highScore = document.querySelector("#highscore");
var $scoreBoard = document.querySelector("#scoreboard");


//this is an array of "question objects"
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


function jsQuiz(){

}

function startTimer(){

}

startTest.addEventListener("click", jsQuiz);

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