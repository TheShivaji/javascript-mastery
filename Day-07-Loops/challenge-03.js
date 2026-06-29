// Challenge Name: Grade Calculator

const calcAvarage = (arr) => {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const avarageMarks = sum / arr.length;

  if (avarageMarks >= 90) console.log(`Total ${sum} Average${avarageMarks}
Grade A`);
  else if (avarageMarks >= 75) console.log(`Total ${sum} Average${avarageMarks}
Grade b`);
  else if (avarageMarks >= 60) console.log(`Total ${sum} Average${avarageMarks}
Grade C`);
  else console.log("Grade D");
};

const marks = [78, 92, 65, 88, 55];
const avarageMarks = calcAvarage(marks);
