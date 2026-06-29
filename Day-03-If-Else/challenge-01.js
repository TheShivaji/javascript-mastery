// Challenge Name: Team Winner Check

const calculateAvg = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calculateAvg(44, 23, 71);
const scoreKoalas = calculateAvg(0, 0, 41);

const finalWin = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Winner team is Dolphins, score is ${avgDolphins}!`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Winner team is Koalas, score is ${avgKoalas}!`);
  } else {
    console.log("No team wins...");
  }
};

finalWin(scoreDolphins, scoreKoalas);
