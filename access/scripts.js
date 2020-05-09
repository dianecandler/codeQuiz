$(document).ready(function () {
	// event listeners using JQuery
	$('#remaining-time').hide();
	$('#start').on('click', quiz.startGame);
	$(document).on('click', '.option', quiz.checkAnswers);

	var quiz = {
		// quiz properties here
		correct: 0,
		incorrect: 0,
		unanswered: 0,
		currentScore: 0,
		quizTimer: false,
		timerId: '',
		questions: {
			q1: 'Commonly used data types DO NOT include:',
			q2: 'The condition in an if/else statement is enclosed withihn _____.',
			q3: 'Arrays in JavaScript can be useful to store _____.',
			q4: 'String values must be enclosed within ____ when being assigned to variables.',
			q5: 'A very useful tool used during development and debugging for printing content to the debugger is:'
		},
		options: {
			q1: [ 'strings', 'booleans', 'alerts', 'numbers' ],
			q2: [ 'quotes', 'curly brackets', 'paranthesis', 'square brackets' ],
			q3: [ 'other arrays', 'booleans', 'numbers and strings', 'all of the above' ],
			q4: [ 'commas', 'curly brackets', 'quotes', 'paranthesis' ],
			q5: [ 'JavaScript', 'terminal/bash', 'for loops', 'console.log' ]
		},
		answers: {
			q1: 'alerts',
			q2: 'curly brackets',
			q3: 'all of the above',
			q4: 'quotes',
			q5: 'console.log'
		}
	};
	// quiz methods
	// method to initialize game
	function startGame () {
		// restarting game results
		quiz.currentScore = 0;
		quiz.correct = 0;
		quiz.incorrect = 0;
		quiz.unanswered = 0;
		clearInterval(quiz.timerId);
		// show game section
		$('#game').show();
		//  empty last results
		$('#results').html('');
		// remove start button
		$('#start').hide();
		// ask first question
		quiz.nextQuestion();
	}
	// method to loop through and display questions and options
	function nextQuestion () {
		// to prevent timer speed up
		if (!quiz.quizTimer) {
			quiz.timerId = setInterval(quiz.userAnswers, 1000);
		}
		// gets all the questions then indexes the current questions
		var questionContent = Object.values(quiz.questions)[quiz.currentScore];
		$('#question').text(questionContent);
		// an array of all the user options for the current question
		var questionOptions = Object.values(quiz.options)[quiz.currentScore]; // creates all the quiz guess options in the html
		$.each(questionOptions, function (index, key) {
			$('#options').append($('<button class=“option btn btn-info btn-lg”>' + key + '</button>'));
		});
	}
	// method to decrement counter and count unanswered if timer runs out
	function userAnswers () {
		// if all the questions have been shown end the game, show results
		if (quiz.currentScore === Object.keys(quiz.questions).length) {
			// adds results of game (correct, incorrect, unanswered) to the page
			$('#results').html(
				'<h3>Thank you for playing!</h3>' +
					'<p>Correct: ' +
					quiz.correct +
					'</p>' +
					'<p>Incorrect: ' +
					quiz.incorrect +
					'</p>' +
					'<p>Unaswered: ' +
					quiz.unanswered +
					'</p>' +
					'<p>Please play again!</p>'
			);
			// hide game sction
			$('#game').hide();
			// show start button to begin a new game
			$('#start').show();
		}
	}
	// method to evaluate the option clicked
	function checkAnswers () {
		// the answer to the current question being asked
		var currentAnswer = Object.values(quiz.answers)[quiz.currentScore];
		if ($(this).text() === currentAnswer) {
			$(this).addClass('btn-success').removeClass('btn-info');
			quiz.correct++;
			clearInterval(quiz.timerId);
			resultId = setTimeout(quiz.guessResult, 1000);
			$('#results').html('<h3>Correct Answer!</h3>');
		}
		else {
			$(this).addClass('btn-danger').removeClass('btn-info');
			quiz.incorrect++;
			clearInterval(quiz.timerId);
			resultId = setTimeout(quiz.guessResult, 1000);
			$('#results').html('<h3>Ops wrong answer, the right choice was ' + currentAnswer() + '</h3>');
		}
	}
	// method to remove previous question results and options
	function guessResult () {
		// increment to next question set
		quiz.currentScore++;
		// remove the options and results
		$('.option').remove();
		$('#results h3').remove();
		// begin next question
		quiz.nextQuestion();
	}
});
