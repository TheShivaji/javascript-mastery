'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const createMovements = function (mov) {

  mov.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal"
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html)

  })
}



const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce((accumulator, mov) => {
    return accumulator + mov;
  }, 0);

  labelBalance.textContent = `${acc.balance}€`;
};


const createUsername = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner.toLowerCase().split(' ').map((name) => name[0]).join("")
  })
}
createUsername(accounts)

const displayDetails = function (movements) {

  const income = movements.filter(mov => mov > 0).reduce((acc, mov) => {
    return acc + mov
  }, 0)
  labelSumIn.textContent = income

  const outcome = movements.filter(mov => mov < 0).reduce((acc, mov) => {
    return acc + mov
  }, 0)
  labelSumOut.textContent = outcome

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;

}
function updateUI(acc) {


  createMovements(acc.movements);
  displayDetails(acc.movements);
  displayBalance(acc);
}

let currentUser;
btnLogin.addEventListener('click', (e) => {
  e.preventDefault()

  currentUser = accounts.find(acc => acc.username === inputLoginUsername.value)

  if (currentUser?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back ${currentUser.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentUser)

  }
})
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);

  const receiver = accounts.find(
    acc => acc.username === inputTransferTo.value.trim()
  );

  inputTransferTo.value = "";
  inputTransferAmount.value = "";

  if (
    receiver &&
    amount > 0 &&
    receiver.username !== currentUser.username &&
    currentUser.balance >= amount
  ) {
    currentUser.movements.push(-amount);
    receiver.movements.push(amount);
    console.log(currentUser)
    updateUI(currentUser);
    console.log(currentUser.movements);
    console.log(currentUser.balance);
  }
});

btnLoan.addEventListener("click", (e) => {
  e.preventDefault()
  const amount = Number(inputLoanAmount.value)

  if (amount > 0 && currentUser.movements.some(mov => mov >= amount * 0.1)) {
    currentUser.movements.push(amount)
    console.log(currentUser.mov)

    updateUI(currentUser)

  }
})
btnClose.addEventListener("click", function (e) {
  e.preventDefault()
  const pin = Number(inputClosePin.value)

  if (currentUser.username == inputCloseUsername.value && currentUser.pin == pin) {

    const user = accounts.findIndex(acc => acc.username == currentUser.username)

    accounts.splice(user, 1)
    containerApp.style.opacity = 0;
  }
})





/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:

*/

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// Coding Challenge #4

// 1. Husky average weight
const huskyWeight = breeds.find(
  br => br.breed === 'Husky'
).averageWeight;

console.log('Husky weight:', huskyWeight);


// 2. Breed that likes both running and fetch
const dogBothActivities = breeds.find(
  br =>
    br.activities.includes('running') &&
    br.activities.includes('fetch')
).breed;

console.log('Both activities:', dogBothActivities);


// 3. All activities of all breeds
const allActivities = breeds
  .map(br => br.activities)
  .flat();

console.log('All activities:', allActivities);


// 4. Unique activities
const uniqueActivities = [...new Set(allActivities)];

console.log('Unique activities:', uniqueActivities);


// 5. Other activities of swimming breeds
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(br => br.activities.includes('swimming'))
      .map(br => br.activities)
      .flat()
      .filter(activity => activity !== 'swimming')
  )
];

console.log('Swimming adjacent:', swimmingAdjacent);


// 6. Do all breeds weigh 10kg or more?
const allAbove10kg = breeds.every(
  br => br.averageWeight >= 10
);

console.log('All breeds 10kg or more:', allAbove10kg);


// 7. Are there any active breeds?
const hasActiveBreed = breeds.some(
  br => br.activities.length >= 3
);

console.log('Any active breed:', hasActiveBreed);


// BONUS. Heaviest breed that likes fetch
const fetchBreeds = breeds.filter(
  br => br.activities.includes('fetch')
);

const fetchWeights = fetchBreeds.map(
  br => br.averageWeight
);

const heaviestFetchWeight = Math.max(...fetchWeights);

console.log('Heaviest fetch breed weight:', heaviestFetchWeight);





