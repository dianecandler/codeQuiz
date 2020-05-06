
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    function showQuestions(questions, quizContainer){
        // need code stuff here
    }
    function showResults(questions, quizContainer, resultsContainer){
        // need code stuff here

    }
    // display questions
    ShowQuestions(questions, quizContainer);

    // user clicks submit button, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}
//   quiz questions
var myQuestion1 = [
    {
        question: "Commonly used data types DO NOT include:"
        answers: {
            1: 'strings'
            2: 'booleans'
            3: 'alerts'
            4: 'numbers'
        },
        correctAnswer: '3'

}

var myQuestion2 = [
    {
        question: "The condition in an if/else statement is enclided withihn _____.",
        answers: {
            1: 'quotes'
            2: 'curly brackets'
            3: 'paranthesis'
            4: 'square brackets'
        },
        correctAnswer: '2'
}

var myQuestion3 = [
    {
        question: "Arrays in JavaScript can be useful to store _____.",
        answers: {
            1: 'numbers and streings'
            2: 'other arrays'
            3: 'booleans'
            4: 'all of the above'
        },
        correctAnswer: '4'
}

var myQuestion4 = [
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: {
            1: 'commas'
            2: 'curly brackets'
            3: 'quotes'
            4: 'paranthesis'
        },
        correctAnswer: '3'
}]

var myQuestion5 = [
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1: 'JavaScript'
            2: 'terminal/bash'
            3: 'for loops'
            4: 'console.log'
        },
        correctAnswer: '4'
}]

function showQuestions(questions, quizContainer){
    // need to store responses and answer options
    var output = [];
    var answers;

    // for each question
    for(var i=0; i<questions.length; i++){

    // reset and create collection for answer list 
        answers = [];
    // for each available answer to questions
    for(number in questions[i].answers){
        // insert html RADIO button - DIANE MODIFY RADIO or type of button
        answers.push(
        '<label>'
            +'<input type="radio" name="question'+i+'"value="'+number+'">'
            + number + ' : '
            + questions[i].answers[number]
        +'</label>'
    );
    }
    // add this question and its answers to the output
    output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') +'</div>'
    );
    }
// combine output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
}
// run function with values from generateQuiz function
    showQuestions(questions, quizContainer);

// Next 1) collect user selected answer, 2) if correct, respond, 
// 3) if not correct, respond, 4) show the number of correct answers out of the total?  
// OR JUST TALLY and subtract 10 sec from timer for wrong answers

function showResults(questions, quizContainer, resultsContainer){
    // collect answer containers for quiz?
    var answerContainers = quizContainer.querySelectorAll('.answers');
    // track user answers
    var userAnswer = '';
    var numCorrect = 0;
    // for each question run the for function
    for(var i=0; i<questions.length; i++){

        // find selected answer
        userAnswer = (answerContainers[i].correctAnswer){
        // if correct add to total correct
        if(userAnswer===questions(i).correctAnswer){
            numCorrect++;
        // respond to user in green
        answerContainers[i].style.color = 'green';
          }
          // if incorrect answer or blank
        else{
              // color the answer red
        answersContainers[i].style.color = 'red';
            }
        }
    }
    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + 'out of ' + questions.length;
}

// show results on submitButton - the variable comes from generateQuiz function as 1 of the parameters
submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
}
// Bring all together by linking JS and HTML elements placed at the top
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
