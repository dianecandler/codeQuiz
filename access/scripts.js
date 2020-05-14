// utilizing JQuery
$(document).ready(function () {
	// event listeners
	$('#remaining-time').hide();
	$('#start').on('click', quiz.startGame);
	$(document).on('click', '.option', quiz.checkAnswers);
});

var quiz = {
	// quiz properties
	correct: 0,
	incorrect: 0,
	unanswered: 0,
	currentScore: 0,
	quizTimer: false,
	timerId: '',
	clock: 0,

	questions: {
		q1: 'A very useful tool used during development and debugging for printing content to the debugger is:',
		q2: 'Arrays in JavaScript can be used to store ____.',
		q3: 'The condition in an if/else statement is enclosed within ____.',
		q4: 'Commonly used data types DO NOT include',
		q5: 'String values must be enclosed within ______ when being assigned to varibles.'
	},
	options: {
		q1: [ 'JavaScript', 'terminal/base', 'for loops', 'console.log' ],
		q2: [ 'numbers and strings', 'other arrays', 'booleans', 'all of the above' ],
		q3: [ 'quotes', 'curly brackets', 'parenthesis', 'square brackets' ],
		q4: [ 'strings', 'booleans', 'alerts', 'numbers' ],
		q5: [ 'commas', 'curly brackets', 'quotes', 'parenthesis' ]
	},
	answers: {
		q1: 'console.log',
		q2: 'all of the above',
		q3: 'curly brackets',
		q4: 'alerts',
		q5: 'quotes'
	},
	// quiz methods
	// method to initialize game
	startGame: function () {
		// restarting game results
		quiz.currentScore = 0;
		quiz.correct = 0;
		quiz.incorrect = 0;
		quiz.unanswered = 0;

		// clock code
		var clockCounter = $('div#clock');
		var clock = 75;
		var clockCounter = 75;

		setInterval(function () {
			clockCounter--;
			$('div#clock').html(clockCounter);
		}, 1000);

		// show game section
		$('#game').show();

		//  empty last results
		$('#results').html('');

		// remove start button
		$('#start').hide();

		// ask first question
		quiz.nextQuestion();
	},
	// method to loop through and display questions and options
	nextQuestion: function () {
		// to prevent timer speed up
		if (!quiz.quizTimer) {
			quiz.timerId = setInterval(quiz.userAnswers, 1000);
		}

		// gets all the questions then indexes the current questions - display
		var questionContent = Object.values(quiz.questions)[quiz.currentScore];
		$('#question').text(questionContent);

		// an array of all the user options for the current question
		var questionOptions = Object.values(quiz.options)[quiz.currentScore];

		// creates all the quiz guess options in the html
		$.each(questionOptions, function (index, key) {
			$('#options').append($('<button class="option btn btn-info btn-lg">' + key + '</button>'));
		});
	},
	// method to decrement counter and count unanswered if timer runs out
	userAnswers: function () {
		// if all the questions have been shown end the game, show results
		if (quiz.currentScore === Object.keys(quiz.questions).length) {
			// stop timer and display time left

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
			console.log(clock);
			var readTime = clock.substr(15, 17);
			console.log(readTime);

			// show start button to begin a new game
			$('#start').show();
		}
	},
	// method to evaluate the option clicked
	checkAnswers: function () {
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
			$('#results').html('<h3>Ops wrong answer, the right choice was ' + currentAnswer + '</h3>');
		}
	},
	// method to remove previous question results and options
	guessResult: function () {
		// increment to next question set
		quiz.currentScore++;

		// remove the options and results
		$('.option').remove();
		$('#results h3').remove();

		// begin next question
		quiz.nextQuestion();
	}
};
