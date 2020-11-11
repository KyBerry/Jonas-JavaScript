// Test Data 1
const dolphinScore = [44, 23, 71];
const koalasScore  = [65, 54, 49];

// Test Data 2
const dolphinScoreTwo = [85, 54, 41];
const koalasScoreTwo = [23, 34, 27];

// Calculate avg score function for the teams
const calcAvg = (teamName, scores) => {
	return {
		avg_score: scores.reduce((a,b) => a + b, 0) / 3,
		team_name: teamName,
	};
};

// Check for a winner out of the two teams function
const checkWinner = function (teamOne, teamTwo) {
	let winner = "";
	if (teamOne.avg_score >= (teamTwo.avg_score * 2)) {
		winner = `${teamOne.team_name} win! (${teamOne.avg_score}, ${teamTwo.avg_score})`;
	} else if (teamTwo.avg_score >= (teamOne.avg_score * 2)) {
		winner = `${teamTwo.team_name} win! (${teamTwo.avg_score}, ${teamOne.avg_score})`;
	} else {
		winner = 'No winner';
	}
	return winner;
};

// Test 1 Results
const avgDolphinScore = calcAvg("Dolphin's", dolphinScore);
const avgKoalasScore  = calcAvg("Koala's", koalasScore);

console.log(checkWinner(avgDolphinScore, avgKoalasScore));

// Test 2 Results
const avgDolphinScoreTwo = calcAvg("Dolphin's", dolphinScoreTwo);
const avgKoalasScoreTwo  = calcAvg("Koala's", koalasScoreTwo);

console.log(checkWinner(avgKoalasScoreTwo, avgDolphinScoreTwo));