//variables for html elements questions for quiz and choices*/
/*/Sound Effect by <a href="https://pixabay.com/users/floraphonic-38928062/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=181415">floraphonic</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=181415">Pixabay</a> */
const questionsEl = document.getElementById('quiz-questions');
const choiceEl = Array.from(document.getElementsByClassName('choiceText'));
const soundIncorrect = new Audio("/assets/buzzer-2-181415.mp3");
const soundCorrect = new Audio("/assets/correct-156911.mp3");
const timerText = document.getElementById('timeText');
const track = document.getElementById('track');
// maximum questions var
const MAXIMUM_QUES_ALLOW = 4;
// empty brackets for the questions object 
let questionQuery = [];
// empty braces for current question stack
let currentQueStack = {};
// number for time var 
let timeRemaining = 40;
// var for score
let scoreId = document.getElementById('scoreId');
// element for time text
let timeClock = document.getElementById('timerId');
// index for questions
let questionCountIndex = 0;
// score var
let score = 0;
// add points correct
let addPoints = 10;
// penalty incorrect 
let subPoints = -4;
// submit answers will be test for value t/f 
let answerSubmitOn = true;
// questions object/array hard coded for development purposes
let questions = [

	{
		question: "JavaScript is  a _________ language",
		choice1: "zero-indexed",
		choice2: "3d-indexed",
		choice3: "4-indexed",
		choice4: "2-indexed",
		answer: 1
	},
	{
		question: "What percentage of websites use JavasScript for client-side scripting?",
		choice1: "25%",
		choice2: "45%",
		choice3: "98%",
		choice4: "73%",
		answer: 3
	},
	{
		question: "Like other scripting languages, JavaScript is ' ________________' typed",
		choice1: "never",
		choice2: "dynamically",
		choice3: "array",
		choice4: "boolean",
		answer: 2
	},
	{
		question: "Which choice is a JavaScript variable declaration",
		choice1: "Var",
		choice2: "Const",
		choice3: "Let",
		choice4: "all of the above",
		answer: 4
	}
];

// func() starts quiz
startGame = () => {
	// set alloted time for quiz
	timeRemaining = 40;
	// question index = 0
	questionCountIndex = 0;
	// assign score to 0
	score = 0;
	// spread op. to get questions obj/array
	questionQuery = [...questions];
	// call next question
	loadNextQuest();
	// invoke quiz timer
	gameClock();

};

// quiz time func()
gameClock = () => {

	// time set for 40 secs
	// func for set interval
	let gameStartClock = setInterval(() => {
		if (timeRemaining >= 2) {
			timeClock.innerText = timeRemaining + ' seconds';
			timeRemaining--;
		} else if (timeRemaining >= 1) {
			timeClock.innerText =
				timeClock.innerText = timeRemaining + " second";
			timeRemaining--;
		} else {
			if (timeRemaining === 0 || questionQuery.length == 0 || questionCountIndex >= MAXIMUM_QUES_ALLOW) {
				timeClock.innerText = timeRemaining + " ";

				// stop timer
				clearInterval(gameStartClock);
				// local storage set score

				localStorage.setItem("playerRecentScore", score)
			}
	\u{ 1F499 }
	timeClock.innerText = "0";

	// set time out 
	setTimeout(() => {
		timeClock.innerText = "Game Over ";
	}, 2000)
	// stop timer
	clearInterval(gameStartClock);
	// local storage set score
	localStorage.setItem("playerRecentScore", score);
	// navigate page to end html
	return window.location.assign("./end.html");
};
	}, 1000)
};


// function loads the next question 
loadNextQuest = () => {
	// condition for setting local storage looks for 0 questions in array and if the question index is greater or equal to max questions
	if (questionQuery.length === 0 || questionCountIndex >= MAXIMUM_QUES_ALLOW) {
		// local storage set score
		score += timeRemaining
		localStorage.setItem("playerRecentScore", score);
		return window.location.assign("./end.html");

	};

	// current question index adds one
	questionCountIndex++;
	// a var for random index current questions
	const queRanIndex = Math.floor(Math.random() * questionQuery.length);
	// current questions 
	currentQueStack = questionQuery[queRanIndex];
	// questions element text = current questions
	questionsEl.innerText = currentQueStack.question;

	// Question track 1/4 and so on
	track.innerText = `Question ${questionCountIndex}/${MAXIMUM_QUES_ALLOW}`;
	// track bar uses css style and width to increment bg color 
	progressBarFull.style.width = `${(questionCountIndex / MAXIMUM_QUES_ALLOW) * 100}%`;
	// choices each assigned data-number text is looped through choiceEl array showing choice in html
	// forEach func for choice array
	choiceEl.forEach((choice) => {
		// dataNumber var to get data-number for each choice
		const dataNumber = choice.dataset['number'];
		// choice element text = quiz choices 'choice1' 
		choice.innerText = currentQueStack['choice' + dataNumber];
	});

	// remove the last question/ choice from array stack
	questionQuery.splice(queRanIndex, 1);
	//boolean for next choice accept
	answerSubmitOn = true;
};

// function to submit quiz answer
// for each choice in array add event listener 
choiceEl.forEach((choice) => {

	choice.addEventListener('click', (e) => {
		// submit on with boolean expression also checks for time <0 to stop choice submission
		if (!answerSubmitOn || timeRemaining <= 0) {
			// if false will log message to console
			console.log('off');
			return;
		}

		// 'turn off submit ans' if true
		answerSubmitOn = false;
		// assign a var to get event obj. target
		const userAnswer = e.target;
		// log to console for check

		// var for user's ans.,   - get data-#
		const answerNumSelect = userAnswer.dataset['number'];
		// element to display correct/incorrect ans. 
		const textWindow = document.getElementById('rightWrong');
		const userAnsWindow = document.getElementById('userAnswerText');

		// captured the parent element of user answer log here
		console.log(userAnswer.parentElement)		//userAnswer.parentElement.classList.add() classlist to be created in css 

		//  check if user ans matches quiz ans will log if true
		if (answerNumSelect == currentQueStack.answer) {
			// add points
			scoreFunc(addPoints);
			// bonus points
			bonusFunc(score)

			// add correct sound
			soundCorrect.play();
			// displays user ans and congrats message
			userAnsWindow.innerText = 'Congrats\u{2757}'
			textWindow.innerText = ['Correct Answer: ' + currentQueStack['choice' + currentQueStack.answer]];
			// userAns obj parent element add class for correct green background
			userAnswer.parentElement.classList.add("correct");
		} else {

			// point penalty
			scoreFunc(subPoints);
			// incorrect sound
			soundIncorrect.play();
			// show user answer incorrect
			userAnsWindow.innerText = 'Incorrect Answer: ' + currentQueStack['choice' + answerNumSelect];
			// displays correct ans to all players
			textWindow.innerText = ['Correct Answer: ' + currentQueStack['choice' + currentQueStack.answer]];
			// userAns obj parent element add class for correct red background
			userAnswer.parentElement.classList.add("incorrect");
			// subtract time
			timeRemaining = timeRemaining - 10;

		}

		// time out to complete clear text and remove classes for corr/incorrect 
		setTimeout(() => {
			textWindow.innerText = "";
			userAnsWindow.innerText = "";
			userAnswer.parentElement.classList.remove("correct");
			userAnswer.parentElement.classList.remove("incorrect");
			// go to next question
			loadNextQuest();
		}, 2000);
	});

});

// func for score adds  -10, and or 3
scoreFunc = (num) => {
	// score is number
	score += num;
	// score element =  'score'
	scoreId.innerHTML = score;

};
// func adds extra 5 points after hitting score of 20 adds another 20 after hitting 40 points
bonusFunc = (num) => {
	// if score = 20 add 5 bonus points to score
	if (num == 20) {
		score += 5;
	} else {
		// if score is 40 and higher add 20 points
		if (num >= 40) {
			score += 10;
		}
	}
	scoreId.innerHTML = score
};

// invoke start()
startGame();





