var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choiceText"));

var currentQuestion = {};
var acceptionAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [  
    {
        "question": "Inside which HTML element do we put the JavaScript??",
        "choice1": "<script>",
        "choice2": "<javascript>",
        "choice3": "<js>",
        "choice4": "<scripting>",
        "answer": 1
    },
    {
        "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
        "choice1": "<script href='xxx.js'>",
        "choice2": "<script name='xxx.js'>",
        "choice3": "<script src='xxx.js'>",
        "choice4": "<script file='xxx.js'>",
        "answer": 3
    },
    {
        "question": " How do you write 'Hello World' in an alert box?",
        "choice1": "msgBox('Hello World');",
        "choice2": "alertBox('Hello World');",
        "choice3": "msg('Hello World');",
        "choice4": "alert('Hello World');",
        "answer": 4
    },
    {
        "question": "Commonly used data types DO NOT include:",
        "choice1": "Strings",
        "choice2": "Alerts",
        "choice3": "Booleans",
        "choice4": "Numbers",
        "answer": 2
    },
    {
        "question": "The condition in an if / else statement is enclosed within _____",
        "choice1": "Quotes",
        "choice2": "Curley Brackets",
        "choice3": "Parentheses",
        "choice4": "Square Brackets",
        "answer": 3
    },
]    

var correctBonus = 10;
var maxQuestions = 5;

function startQuestion() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ...questions];
    getNewQuestion();
};

function getNewQuestion() {
    if(availableQuestions.length == 0 || questionCounter >= maxQuestions ) {
        return window.location.assign("end.html");
}

    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptionAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptionAnswers) return;
    
        acceptionAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];

        var classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

            selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
        }, 1000);
    });
});

startQuestion();