var question = document.getElementById('questions');
var answerA = document.getElementById('ansA');
var answerB = document.getElementById('ansB');
var answerC = document.getElementById('ansC');
var answerD = document.getElementById('ansD');
var displaycorrect = document.getElementById('correctornot');
var currentquestion = 0;
var score = 0;
var timeleft = 60;

var QuizArray = [
	//question 1
	{
		Question: 'Commonly used data types DO NOT include:',
		choices: {
			A: 'rstrings',
			B: 'booleans',
			C: 'alets',
			D: 'nmbers'
		},
		correct: 'alerts'
	},
	//question 2
	{
		Question: 'The condition in an if/else statement is enclided withihn _____.',
		choices: {
			A: 'quotes',
			B: 'curly brackets',
			C: 'paranthesis',
			D: 'square brackets'
		},
		correct: 'curly brackets'
	},
	//question 3
	{
		Question: 'Arrays in JavaScript can be useful to store _____.',
		choices: {
			A: 'numbers and strings',
			B: 'other arrays',
			C: 'booleans',
			D: 'all of the above'
		},
		correct: 'all of the above'
	},
	//question 4
	{
		Question: 'String values must be enclosed within ____ when being assigned to variables.',
		choices: {
			A: 'rcommas',
			B: 'curly brackets',
			C: 'quotes',
			D: 'paranthesis'
		},
		correct: 'quotes'
	},
	//question 5
	{
		Question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
		choices: {
			A: 'JavaScript',
			B: 'terminal/bash',
			C: 'for loops',
			D: 'console.log'
		},
		correct: 'console.log'
	}
];

function Que (dd) {
	question.textContent = QuizArray[dd].Question;
	answerA.textContent = QuizArray[dd].choices.A;
	answerB.textContent = QuizArray[dd].choices.B;
	answerC.textContent = QuizArray[dd].choices.C;
	answerD.textContent = QuizArray[dd].choices.D;
	console.log(dd);
}

//starts the whole thing right here, start a timer here
Que(0);
// uses global variable to check if answer is correct
function clickedA () {
	//check for right answer and add to score
	if (QuizArray[currentquestion].choices.A === QuizArray[currentquestion].correct) {
		console.log('correct');
		displaycorrect.textcontent = 'Correct!';
		score++;
	}
	else {
		console.log('false');
		displaycorrect.textcontent = 'Wrong!';
	}
	//switch to next question
	currentquestion++;
	//add 2 sec delay here
	Que(currentquestion);
}

function clickedB () {
	//check for right answer and add to score
	if (QuizArray[currentquestion].choices.B === QuizArray[currentquestion].correct) {
		console.log('correct');
		displaycorrect.textcontent = 'Correct!';
		score++;
	}
	else {
		console.log('false');
		displaycorrect.textcontent = 'Wrong!';
	}
	//switch to next question
	currentquestion++;
	//add 2 sec delay here
	Que(currentquestion);
}

function clickedC () {
	//check for right answer and add to score
	if (QuizArray[currentquestion].choices.C === QuizArray[currentquestion].correct) {
		console.log('correct');
		displaycorrect.textcontent = 'Correct!';
		score++;
	}
	else {
		console.log('false');
		displaycorrect.textcontent = 'Wrong!';
	}
	//switch to next question
	currentquestion++;
	//add 2 sec delay here
	Que(currentquestion);
}

function clickedD () {
	//check for right answer and add to score
	if (QuizArray[currentquestion].choices.D === QuizArray[currentquestion].correct) {
		console.log('correct');
		displaycorrect.textcontent = 'Correct!';
		score++;
	}
	else {
		console.log('false');
		displaycorrect.textcontent = 'Wrong!';
	}
	//switch to next question
	currentquestion++;
	//add 2 sec delay here
	Que(currentquestion);
}

//fix displaycorrect or not
