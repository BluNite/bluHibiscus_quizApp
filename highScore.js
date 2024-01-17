// high scores rated list el
const highScoresRated = document.getElementById("highScoreIdList");
// get high scores from local storage or empty array if none
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// clear button id el 
const clearBtn = document.getElementById("clearBtnId");

// high scores rated text map high scores array
highScoresRated.innerHTML = highScores
	.map(score => {
		// list element class highScoreClass text username - score 
		return `<li class="highScoreClass">${score.userName} :   ${score.score}</li>`
	})// important  remember to join array with ""
	.join("");


// clear button event listener
clearBtn.addEventListener('click', () => {
	// remove highScore from local storage
	localStorage.removeItem('highScores', highScores);
	// high score rated list text clear
	highScoresRated.innerHTML = "";
});