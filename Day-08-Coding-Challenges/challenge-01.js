// Challenge Name: Cricket Score Analyzer

const cricketScoreAnalyzer = function (arr) {
  let sum = 0;
  let highestScore = arr[3];
  let lowestScore = arr[0];
  let century = 0;
  let halfCentury = 0;
  let avrageScore;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > highestScore) {
      highestScore = arr[i];
    }
    if (arr[i] < lowestScore) {
      lowestScore = arr[i];
    }
    arr[i] >= 100 && arr[i] >= 50 ? century++ : halfCentury++;

    avrageScore = sum / arr.length;
  }
  console.log(`Total Score:${sum}
Highest: ${highestScore}
Lowest: ${lowestScore}
Centuries: ${century}
50+ Scores: ${halfCentury}
Average: ${avrageScore}`);
};

const scores = [45, 102, 67, 150, 89];
cricketScoreAnalyzer(scores);
