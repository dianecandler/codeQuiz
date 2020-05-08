$(document).ready(function () {
	// jQuery methods go here...
	//event listeners
	$('#start').on('click', quiz.startGame);
	$(document).on('click', '.option', quiz.checkAnswers);
});
// let question = document.getElementById('questions');
// let answerA = document.getElementById('ansA');
// let answerB = document.getElementById('ansB');
// let answerC = document.getElementById('ansC');
// let answerD = document.getElementById('ansD');
// let displaycorrect = document.getElementById('correctornot');

var quiz = {
	correct: 0,
	incorrect: 0,
	unanswered: 0,
	currentScore: 0,

	//questions and options
	questions: {
		q1: 'What color is the sky?',
		q2: 'What color is the ground',
		q3: 'What colour is the  clouds',
		q4: 'What colour is the road'
	},

	options: {
		q1: [ 'Red', 'Green', 'Blue', 'Purple' ],
		q2: [ 'Red', 'Green', 'Blue', 'Purple' ],
		q3: [ 'Red', 'Green', 'Blue', 'Purple' ],
		q4: [ 'Red', 'Green', 'Blue', 'Purple' ]
	},

	answers: {
		q1: 'Red',
		q2: 'Green',
		q3: 'Red',
		q4: 'Blue'
	},

	startGame: function () {
		quiz.currentScore = 0;
		quiz.correct = 0;
		quiz.incorrect = 0;
		quiz.unanswered = 0;

		//show game
		$('#game').show();

		//clean results
		$('#results').html('');

		//make start button disappear
		$('#start').hide();

		//ask our first question
		quiz.nextQuestion();
	},

	nextQuestion: function () {
		var questionContent = Object.values(quiz.questions)[quiz.currentScore];
		$('#question').text(questionContent);

		var questionOptions = Object.values(quiz.options)[quiz.currentScore];

		//create the options in the html
		$.each(questionOptions, function (index, key) {
			$('#options').append($('<button class="option btn btn-info btn-lg"' + key + '</button>'));
		});
	}
};

//let currentquestion;
// let score = 0;
// var endDate = newDate(":60").getTime();
// questions.children.setAttribute('style', 'color:#bf5700; underline: margin:2px; padding 2px');

// // var QuizArray = [
// // 	//question 1
// // 	{
// // 		Question: 'Commonly used data types DO NOT include:',
// // 		choices: {
// // 			A: 'strings',
// // 			B: 'booleans',
// // 			C: 'alets',
// // 			D: 'nmbers'
// // 		},
// // 		correct: 'alerts'
// // 	},
// // 	//question 2
// // 	{
// // 		Question: 'The condition in an if/else statement is enclided withihn _____.',
// // 		choices: {
// // 			A: 'quotes',
// // 			B: 'curly brackets',
// // 			C: 'paranthesis',
// // 			D: 'square brackets'
// // 		},
// // 		correct: 'curly brackets'
// // 	},
// // 	//question 3
// // 	{
// // 		Question: 'Arrays in JavaScript can be useful to store _____.',
// // 		choices: {
// // 			A: 'numbers and strings',
// // 			B: 'other arrays',
// // 			C: 'booleans',
// // 			D: 'all of the above'
// // 		},
// // 		correct: 'all of the above'
// // 	},
// // 	//question 4
// // 	{
// // 		Question: 'String values must be enclosed within ____ when being assigned to variables.',
// // 		choices: {
// // 			A: 'rcommas',
// // 			B: 'curly brackets',
// // 			C: 'quotes',
// // 			D: 'paranthesis'
// // 		},
// // 		correct: 'quotes'
// // 	},
// // 	//question 5
// // 	{
// // 		Question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
// // 		choices: {
// // 			A: 'JavaScript',
// // 			B: 'terminal/bash',
// // 			C: 'for loops',
// // 			D: 'console.log'
// // 		},
// // 		correct: 'console.log'
// // 	}
// // ];

// // function Que (dd) {
// // 	// add loop

// // 	// console.log('correct' + QuizArray[i].correct);
// // 	question.textContent = QuizArray[dd].Question;
// // 	answerA.textContent = QuizArray[dd].choices.A;
// // 	answerB.textContent = QuizArray[dd].choices.B;
// // 	answerC.textContent = QuizArray[dd].choices.C;
// // 	answerD.textContent = QuizArray[dd].choices.D;
// // 	displaycorrect.textContent = QuizArray[dd].correct;
// // 	console.log(dd);
// // }
// // for (var i = 0; i < currentquestion.length; i++) {
// // 	//starts the whole thing right here, start a timer here
// // 	// Que(i);
// // 	console.log(currentquestion);
// // }

// // //starts the whole thing right here, start a timer here
// // Que(0);

// // // uses global variable to check if answer is correct
// // function clickedA () {
// // 	//check for right answer and add to score
// // 	if (QuizArray[currentquestion].choices.A === QuizArray[currentquestion].correct) {
// // 		console.log('correct');
// // 		displaycorrect.textcontent = 'Correct!';
// // 		score++;
// // 	}
// // 	else {
// // 		console.log('false');
// // 		displaycorrect.textcontent = 'Wrong!';
// // 	}
// // 	//switch to next question
// // 	currentquestion++;
// // 	//add 2 sec delay here
// // 	Que(currentquestion);
// // }

// // function clickedB () {
// // 	//check for right answer and add to score
// // 	if (QuizArray[currentquestion].choices.B === QuizArray[currentquestion].correct) {
// // 		console.log('correct');
// // 		displaycorrect.textcontent = 'Correct!';
// // 		score++;
// // 	}
// // 	else {
// // 		console.log('false');
// // 		displaycorrect.textcontent = 'Wrong!';
// // 	}
// // 	//switch to next question
// // 	currentquestion++;
// // 	//add 2 sec delay here
// // 	Que(currentquestion);
// // }

// // function clickedC () {
// // 	//check for right answer and add to score
// // 	if (QuizArray[currentquestion].choices.C === QuizArray[currentquestion].correct) {
// // 		console.log('correct');
// // 		displaycorrect.textcontent = 'Correct!';
// // 		score++;
// // 	}
// // 	else {
// // 		console.log('false');
// // 		displaycorrect.textcontent = 'Wrong!';
// // 	}
// // 	//switch to next question
// 	currentquestion++;
// 	//add 2 sec delay here
// 	Que(currentquestion);
// }

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

// Add timer here -----------------------------------------------
// =======================================================================
var statusSpan = document.querySelector('#status');
var statusToggle = document.querySelector('#status-toggle');
var playButton = document.querySelector('#play');
var minutesDisplay = document.querySelector('#minutes');
var secondsDisplay = document.querySelector('#seconds');
var totalSeconds = 0;
var secondsElapsed = 0;
var status = 'Working';
var interval;

/* One thing to distinguish here is that not all functions are created equal.
   Some functions just change settings, some functions just call other functions,
   some functions just format strings or numbers, etc. */

//this launches the app by calling setTime() and renderTime()
// getTimePreferences();

//These two functions are just for making sure the numbers look nice for the html elements
function getFormattedMinutes () {
	var secondsLeft = totalSeconds - secondsElapsed;
	var minutesLeft = Math.floor(secondsLeft / 75);
	var formattedMinutes;

	if (minutesLeft < 10) {
		formattedMinutes = '0' + minutesLeft;
	}
	else {
		formattedMinutes = minutesLeft;
	}

	return formattedMinutes;
}

function getFormattedSeconds () {
	var secondsLeft = (totalSeconds - secondsElapsed) % 60;
	var formattedSeconds;
	if (secondsLeft < 10) {
		formattedSeconds = '0' + secondsLeft;
	}
	else {
		formattedSeconds = secondsLeft;
	}

	return formattedSeconds;
}

// /* This function just retrieves the values from the html input elements; Sort of
//    getting run in the background, it sets the totalSeconds variable which
//    is used in getFormattedMinutes/Seconds() and the renderTime() function.
//    It essentially resets our timer */
function setTime () {
	var minutes;
	if (status === 'Working') {
		minutes = workMinutesInput.value.trim();
	}
	else {
		minutes = restMinutesInput.value.trim();
	}

	clearInterval(interval);
	totalSeconds = minutes * 60;
}

// //This function does 2 things. displays the time and checks to see if time is up.
// function renderTime () {
// 	// When renderTime is called it sets the textContent for the timer html...
// 	minutesDisplay.textContent = getFormattedMinutes();
// 	secondsDisplay.textContent = getFormattedSeconds();

// 	// ..and then checks to see if the time has run out
// 	if (secondsElapsed >= totalSeconds) {
// 		if (status === 'Working') {
// 			alert('Time for a break!');
// 		}
// 		else {
// 			alert('Time to get back to work!');
// 		}

// 		stopTimer();
// 	}
// }

// This function is where the "time" aspect of the timer runs
// Notice no settings are changed other than to increment the secondsElapsed var
// function startTimer () {
// 	setTime();

// we only want to start the timer if minutes is > 0
// if (totalSeconds > 0) {
/* the "interval" variable here using "setInterval()" begins the recurring increment of the 
       secondsElapsed variable which is used to check if the time is up */
// 		interval = setInterval(function () {
// 			secondsElapsed++;
// 			//So renderTime() is called here once every second.
// 			renderTime();
// 		}, 1000);
// 	}
// 	else {
// 		alert('Minutes of work/rest must be greater than 0.');
// 	}
// }

/* This function stops the setInterval() set in startTimer but does not
   reset the secondsElapsed variable and does not reset the time by calling "setTime()" */
// function pauseTimer () {
// 	clearInterval(interval);
// 	renderTime();
// }

/* This function stops the interval and also resets secondsElapsed 
   and calls "setTime()" which effectively reset the timer 
   to the input selections workMinutesInput.value and restMinutesInput.value */
// function stopTimer () {
// 	secondsElapsed = 0;
// 	setTime();
// 	renderTime();
// }

/* Our timer is fancy enough to handle 2 different settings at once this toggle 
   function basically just specifies which of our 2 timer settings to use. */
// function toggleStatus (event) {
// 	var checked = event.target.checked;

// 	if (checked) {
// 		status = 'Working';
// 	}
// 	else {
// 		status = 'Resting';
// 	}

// 	statusSpan.textContent = status;

// 	secondsElapsed = 0;
// 	setTime();
// 	renderTime();
// }

// function getTimePreferences () {
/* Here we check to see if any preferences have 
     been set in the local storage via "setTimePreferences()" */
// var preferences = JSON.parse(localStorage.getItem('preferences'));
// setTimePreferences();
/* "setTimePreferences()" is actually never called so the below code will never run 
     (ie. the "preferences" variable checked below will always be null.
     The settings are always set by directly checking the input elements in the setTime() function) */
// if (preferences) {
// 	if (preferences.workMinutes) {
// 		workMinutesInput.value = preferences.workMinutes;
// 	}

// 	if (preferences.restMinutes) {
// 		restMinutesInput.value = preferences.restMinutes;
// 	}
// }

//This is where the app is really kicked-off, setTime and renderTime are the two main routines.
// 	setTime();
// 	renderTime();
// }

// playButton.addEventListener('click', startTimer);
// pauseButton.addEventListener('click', pauseTimer);
// stopButton.addEventListener('click', stopTimer);
// statusToggle.addEventListener('change', toggleStatus);
// ------------- END OF CLASS TIMER ------------------------------

// var endDate = newDate(":60").getTime();
// var timer = setInterval(function () {
// 	let now = newDate().getTime();
// 	let t = endDate - now;
// 	if (t >= 0) {
// 		let secs = Math.floor((t % (1000 * 60)) / 1000);
// 		document.getElementById('timer-secs').innerHTML = ('0' + secs).slice(-2) + "<span class='label'> SEC(S)</span>";
// 	}
// 	else {
// 		document.getElementById('timer').innerHTML = "Time's up!";
// 	}
// }, 1000);
//fix displaycorrect or not

// add points here

// degrade time by 10 sec if incorrect - sample from homework below-could add in if else above?
// decrementEl.addEventListener("click", function() {
// 	if(count > 0) {
// 	  count--;
// 	  setCounterText();
// 	}
//   });
