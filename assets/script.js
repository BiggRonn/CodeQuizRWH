var startTest = document.querySelector("#generate");

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

startTest.addEventListener("click", jsQuiz);