// Challenge Name: Expense Tracker

const expenseTracker = (arr) => {
  let sum = 0;
  let highest = arr[0];
  let lowest = arr[3];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > highest) {
      highest = arr[i];
    }
    if (arr[i] < lowest) {
      highest = arr[i];
    }
  }
  console.log(`The highest expense is${highest} &&lowest expense is ${lowest} and avarage of all expense is ${sum / arr.length}`);
};

const expenses = [250, 700, 120, 80, 500];

expenseTracker(expenses);
