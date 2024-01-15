// elements added from html
// final score 
const finalScore = document.getElementById('finalScore');
// player name
const playerName = document.getElementById('playername');
// save button
const saveBtn = document.getElementById('savebtn');
// get most recent score from local storage
const playerRecentScore = localStorage.getItem('playerRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
// add to el player most recent score
finalScore.innerText = `Player Score ${playerRecentScore}`;

// add event listener to input playername 'keyup'
//disable button if there is no playerName typed
playerName.addEventListener('keyup', () => {
	saveBtn.disabled = !playerName.value;
	// check for name 
	console.log(playerName.value)
});




// save score button event capture object
savehighscore = (e) => {
	// handle default action in browser 
	e.preventDefault();
	// score object for highScore local storage 
	const score = {
		// score is a random number less than1 greater than 0 * 100
		score: Math.floor(Math.random() * 100),
		// username is playerName value
		userName: playerName.value,
	};
	// push score to highScore
	highScores.push(score);
	// sort highScores for placement
	highScores.sort((a, b) =>
		b.score - a.score
	)
	// cuts score after 5th index
	highScores.splice(5);
	// set highScore to local storage
	localStorage.setItem('highScores', JSON.stringify(highScores));
	window.location.assign("highScore.html");


}

