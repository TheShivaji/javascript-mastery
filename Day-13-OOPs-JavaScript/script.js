//OOP Challenge 1


// const Car = function (carName, speed) {
//   this.carName = carName;
//   this.speed = speed
// }
// Car.prototype.acc = function () {
//   this.speed = this.speed + 10
//   console.log(this.speed)
// }

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5
//   console.log(this.speed)
// }

// const bmw = new Car("BMW", 120)
// const mercedes = new Car("Mercedes", 95)

// bmw.acc()
// bmw.acc()
// bmw.acc()
// bmw.acc()
// bmw.acc()
// mercedes.brake()
// mercedes.brake()
// mercedes.brake()
// mercedes.brake()
// mercedes.brake()

///////////////////////////////////////
// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);


// Coding Challenge #3 — Bank Account

/*
1. Create an ES6 class called 'BankAccount'.

   The account should have:
   - owner
   - balance

2. Create a 'deposit' method.

   It should:
   - Add the deposited amount to the current balance.
   - Log the new balance to the console.

3. Create a 'withdraw' method.

   It should:
   - Subtract the withdrawn amount from the current balance.
   - Log the new balance to the console.

4. Create a 'checkBalance' method.

   It should:
   - Display the account owner's name.
   - Display the current balance.

5. Create two bank account objects.

   ACCOUNT 1:
   Owner: "Rahul"
   Starting balance: 10000

   ACCOUNT 2:
   Owner: "Priya"
   Starting balance: 15000

6. Experiment with the methods.

   For Rahul:
   - Deposit 5000
   - Withdraw 3000
   - Check the balance

   For Priya:
   - Deposit 2000
   - Withdraw 7000
   - Check the balance

IMPORTANT:

- Use an ES6 class.
- Use a constructor.
- Use 'this' to work with the object's properties.
- Do not manually calculate or store the final balances.
- The balance must change dynamically when deposit or withdraw
  methods are called.

GOOD LUCK 😀🔥
*/
// class BankAccount {
//   constructor(owner, balance) {
//     this.owner = owner
//     this.balance = balance
//   }
//   deposit(amount) {
//     this.balance = this.balance + amount
//     console.log(`The ${this.owner} current balance is : ${this.balance}`)
//   }

//   withdraw(amount) {
//     this.balance -= amount
//     console.log(`The ${this.owner} current balance is : ${this.balance}`)

//   }
//   checkBalance() {
//     console.log(`The account owner is ${this.owner} and there balance is ${this.balance} `)
//   }


// }

// const Acc1 = new BankAccount("Rahul", 10000)
// console.log(Acc1)
// const Acc2 = new BankAccount("Priya", 15000)
// console.log(Acc2)

// Acc1.deposit(5000)
// Acc1.withdraw(3000)
// Acc1.checkBalance()

// Acc2.deposit(2000)
// Acc2.withdraw(7000)
// Acc2.checkBalance()


// Coding Challenge #3

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed)
  this.charge = charge

}
EV.prototype = Object.create(Car.prototype)

EV.prototype.constructor = EV
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );

}
const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();


/*
============================================================
🚀 CODING CHALLENGE #4 — FLIGHT BOOKING SYSTEM
============================================================

1. Create an ES6 class called 'Flight'. A flight has a
flight number, airline, and total number of seats.

The class should also keep track of the number of currently
booked seats.

DATA FLIGHT 1: 'AI101', 'Air India', 5 seats
DATA FLIGHT 2: '6E202', 'IndiGo', 3 seats


2. Implement a 'bookSeat' method which will book one seat.

Every time the method is called:
- Increase the number of booked seats by 1.
- Log the flight number and the updated number of booked seats.

However, if all seats are already booked, do not allow another
booking and log an appropriate message.


3. Implement a 'cancelBooking' method which will cancel one
booking.

Every time the method is called:
- Decrease the number of booked seats by 1.
- Log the updated number of booked seats.

The number of booked seats should never become negative.


4. Implement a 'checkAvailability' method which logs:

Flight number
Airline
Total seats
Booked seats
Available seats

The available seats should be calculated dynamically.


5. Create two flight objects using the data provided above.


6. Experiment with the first flight:

- Book 3 seats.
- Check availability.
- Cancel 1 booking.
- Check availability again.
- Book 2 more seats.
- Check availability again.


7. Experiment with the second flight:

- Book all available seats.
- Try to book one more seat.
- Check availability.
- Cancel 2 bookings.
- Check availability again.


8. Make sure that both flight objects maintain their own
independent state.

For example, booking a seat on Flight 1 must NOT change the
number of booked seats on Flight 2.


HINT: Think about how object state works with 'this' 😉


GOOD LUCK 😀🔥
============================================================
*/

class Flight {

  constructor(flightNumber, airline, totalSeats) {
    this.flightNumber = flightNumber;
    this.airline = airline;
    this.totalSeats = totalSeats;
    this.bookedSeats = 0
  }


  bookSeat() {
    if (this.bookedSeats >= this.totalSeats) {
      console.log("Sorry! This flight is fully booked. No more seats available.");
      return;
    }
    this.bookedSeats++;
    console.log(`The flight number is ${this.flightNumber} and your total booked seats are ${this.bookedSeats}`);
  }
  cancelBooking() {
    if (this.bookedSeats <= 0) {
      console.log(`Sorry! You don't have a booked seats in this fligth ${this.flightNumber}`)
      return
    }
    this.bookedSeats--;
  }
  checkAvailability() {
    const availableSeats = this.totalSeats - this.bookedSeats
    console.log(`The flight information
       ${this.flightNumber}
       ${this.airline}
       ${this.totalSeats}
       ${this.bookSeat}
       ${availableSeats} `)
  }
}
const flight1 = new Flight("AI101", "Air India", 5);
const flight2 = new Flight("6E202", "IndiGo", 3);


// ============================================================
// ✈️ FLIGHT 1 — Air India
// ============================================================

console.log("===== FLIGHT 1 =====");

flight1.bookSeat();
flight1.bookSeat();
flight1.bookSeat();

flight1.checkAvailability();

flight1.cancelBooking();

flight1.checkAvailability();

flight1.bookSeat();
flight1.bookSeat();

flight1.checkAvailability();


// ============================================================
// ✈️ FLIGHT 2 — IndiGo
// ============================================================

console.log("===== FLIGHT 2 =====");

flight2.bookSeat();
flight2.bookSeat();
flight2.bookSeat();

// Try booking when flight is full
flight2.bookSeat();

flight2.checkAvailability();

flight2.cancelBooking();
flight2.cancelBooking();

flight2.checkAvailability();


// ============================================================
// 🔥 INDEPENDENT STATE CHECK
// ============================================================

console.log("===== FINAL STATE =====");

flight1.checkAvailability();
flight2.checkAvailability();

/*
============================================================
🚀 CODING CHALLENGE #5 — EMPLOYEE MANAGEMENT SYSTEM
============================================================

1. Create an ES6 class called 'Employee'.

An employee has:

- name
- salary
- department

Create a method called 'work' which logs a message like:

'Rahul is working in the Engineering department'


------------------------------------------------------------

2. Create a CHILD class called 'Developer' that inherits
from 'Employee'.

Besides the properties inherited from Employee, a Developer
also has:

- programmingLanguage

DATA:

Developer 1:
Name: 'Rahul'
Salary: 85000
Department: 'Engineering'
Programming language: 'JavaScript'


------------------------------------------------------------

3. Create a method called 'code' inside the Developer class.

It should log a message like:

'Rahul is coding in JavaScript'


------------------------------------------------------------

4. Override the 'work' method inside the Developer class.

Instead of the normal Employee work message, a Developer
should log a message like:

'Rahul is developing software in the Engineering department'


HINT: This is an example of POLYMORPHISM 😉


------------------------------------------------------------

5. Create another CHILD class called 'Manager' that also
inherits from 'Employee'.

Besides the inherited properties, a Manager has:

- teamSize

DATA:

Manager 1:
Name: 'Priya'
Salary: 120000
Department: 'Management'
Team size: 8


------------------------------------------------------------

6. Create a method called 'manage' inside the Manager class.

It should log a message like:

'Priya is managing a team of 8 people'


------------------------------------------------------------

7. Override the 'work' method inside the Manager class.

A Manager should log a message like:

'Priya is managing the Management department'


------------------------------------------------------------

8. Create objects for:

- Rahul as a Developer
- Priya as a Manager


Then experiment with:

- work()
- code()
- manage()


Make sure each object uses the correct version of the
methods.


------------------------------------------------------------

9. Make sure the Employee class can still be used directly.

Create one normal Employee object:

Name: 'Amit'
Salary: 65000
Department: 'Design'

Call its 'work' method.


------------------------------------------------------------

⚠️ IMPORTANT RULES
============================================================

1. Use ES6 classes.

2. Use inheritance.

3. Use 'super'.

4. Use 'this'.

5. Do not duplicate Employee properties unnecessarily
   inside Developer or Manager.

6. Developer and Manager must maintain their own state.

7. Both Developer and Manager must override the 'work'
   method differently.

8. Do not manually create separate functions outside
   the classes for the same behavior.

9. Understand why the same method name 'work()' produces
   different behavior for different objects.


------------------------------------------------------------

🧠 CONCEPTS PRACTICED
============================================================

- ES6 Classes
- Constructor
- this
- extends
- super
- Inheritance
- Method Overriding
- Polymorphism
- Multiple Child Classes
- Object State


============================================================
🔥 DIFFICULTY: HARD
============================================================

GOOD LUCK 😀🔥
============================================================
*/

class Employee {
  constructor(name, salary, department) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }
  work() {
    console.log(`The employee work on this department ${this.department}`);
  }
}

class Developer extends Employee {
  constructor(name, salary, department, programmingLanguage) {
    super(name, salary, department);
    this.programmingLanguage = programmingLanguage;
  }
  code() {
    console.log(`${this.name} is on this ${this.programmingLanguage}`);
  }
  work() {
    console.log(`The Developer work on this department ${this.department}`);
  }
}

class Manager extends Employee {
  constructor(name, salary, department, teamSize) {
    super(name, salary, department);
    this.teamSize = teamSize;
  }
  manage() {
    console.log(`${this.name} manage the team and team size is ${this.teamSize}`);
  }
  work() {
    console.log(`Manage the team and size is ${this.teamSize}`);
  }
}
// ============================================================
// 🧪 TEST — DEVELOPER
// ============================================================

console.log("===== DEVELOPER =====");

const developer1 = new Developer(
  "Rahul",
  85000,
  "Engineering",
  "JavaScript"
);

developer1.work();
developer1.code();


// ============================================================
// 🧪 TEST — MANAGER
// ============================================================

console.log("===== MANAGER =====");

const manager1 = new Manager(
  "Priya",
  120000,
  "Management",
  8
);

manager1.work();
manager1.manage();


// ============================================================
// 🧪 TEST — NORMAL EMPLOYEE
// ============================================================

console.log("===== EMPLOYEE =====");

const employee1 = new Employee(
  "Amit",
  65000,
  "Design"
);

employee1.work();


// ============================================================
// 🔥 POLYMORPHISM CHECK
// ============================================================

console.log("===== POLYMORPHISM =====");

developer1.work();
manager1.work();
employee1.work();


// ============================================================
// 🔍 OBJECT STATE CHECK
// ============================================================

console.log("===== OBJECTS =====");

console.log(developer1);
console.log(manager1);
console.log(employee1);
