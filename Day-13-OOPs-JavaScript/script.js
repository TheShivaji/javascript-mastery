//OOP Challenge 1


const Car = function (carName, speed) {
  this.carName = carName;
  this.speed = speed
}
Car.prototype.acc = function () {
  this.speed = this.speed + 10
  console.log(this.speed)
}

Car.prototype.brake = function () {
  this.speed = this.speed - 5
  console.log(this.speed)
}

const bmw = new Car("BMW", 120)
const mercedes = new Car("Mercedes", 95)

bmw.acc()
bmw.acc()
bmw.acc()
bmw.acc()
bmw.acc()
mercedes.brake()
mercedes.brake()
mercedes.brake()
mercedes.brake()
mercedes.brake()

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

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);


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
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner
    this.balance = balance
  }
  deposit(amount) {
    this.balance = this.balance + amount
    console.log(`The ${this.owner} current balance is : ${this.balance}`)
  }

  withdraw(amount) {
    this.balance -= amount
    console.log(`The ${this.owner} current balance is : ${this.balance}`)

  }
  checkBalance() {
    console.log(`The account owner is ${this.owner} and there balance is ${this.balance} `)
  }


}

const Acc1 = new BankAccount("Rahul", 10000)
console.log(Acc1)
const Acc2 = new BankAccount("Priya", 15000)
console.log(Acc2)

Acc1.deposit(5000)
Acc1.withdraw(3000)
Acc1.checkBalance()

Acc2.deposit(2000)
Acc2.withdraw(7000)
Acc2.checkBalance()

// ============================================================
// 🚀 OOP CODING CHALLENGE #4 — FLIGHT BOOKING SYSTEM
// ============================================================

/*
You are building a simple flight booking system.

Your goal is to create a Flight class that can manage
passengers and available seats dynamically.

------------------------------------------------------------
🎯 TASK 1 — Create the Flight Class
------------------------------------------------------------

Create an ES6 class called:

Flight

The constructor should receive:

- flightNumber
- airline
- totalSeats

The flight should also keep track of how many seats
are currently booked.

Initially, no seats should be booked.

------------------------------------------------------------
🎯 TASK 2 — Book a Seat
------------------------------------------------------------

Create a method called:

bookSeat()

It should:

- Check whether a seat is available.
- If a seat is available, increase the booked seat count by 1.
- Log a message containing the passenger's booking information.
- If no seats are available, display an appropriate message.

The number of available seats must change dynamically.

------------------------------------------------------------
🎯 TASK 3 — Cancel a Booking
------------------------------------------------------------

Create a method called:

cancelBooking()

It should:

- Check whether there is at least one booked seat.
- If a booking exists, decrease the booked seat count by 1.
- Display the updated booking information.

The number of booked seats must never become negative.

------------------------------------------------------------
🎯 TASK 4 — Check Available Seats
------------------------------------------------------------

Create a method called:

checkAvailability()

It should display:

- Flight number
- Airline
- Total seats
- Booked seats
- Available seats

Available seats should be calculated dynamically.

Do NOT manually store the available seat count.

------------------------------------------------------------
🎯 TASK 5 — Create Flight Objects
------------------------------------------------------------

Create two flight objects.

FLIGHT 1:

Flight number: "AI101"
Airline: "Air India"
Total seats: 5

FLIGHT 2:

Flight number: "6E202"
Airline: "IndiGo"
Total seats: 3

------------------------------------------------------------
🎯 TASK 6 — Experiment With Flight 1
------------------------------------------------------------

For the Air India flight:

- Book 3 seats.
- Check availability.
- Cancel 1 booking.
- Check availability again.
- Book 2 more seats.
- Check availability again.

------------------------------------------------------------
🎯 TASK 7 — Experiment With Flight 2
------------------------------------------------------------

For the IndiGo flight:

- Book all available seats.
- Try booking one more seat.
- Check availability.
- Cancel 2 bookings.
- Check availability again.

------------------------------------------------------------
⚠️ IMPORTANT RULES
------------------------------------------------------------

1. Use an ES6 class.

2. Use a constructor.

3. Use 'this' to manage the flight's state.

4. Do not manually calculate available seats.

5. The class should work for ANY number of total seats.

6. Do not create separate logic for Flight 1 and Flight 2.

7. Both objects must maintain their own independent state.

8. Do not use external libraries.

------------------------------------------------------------
🧠 CONCEPTS PRACTICED
------------------------------------------------------------

- ES6 Classes
- Constructor
- this
- Methods
- Object State
- Conditional Logic
- Dynamic Calculations
- Multiple Objects

============================================================
🔥 DIFFICULTY: HARD
============================================================
*/











