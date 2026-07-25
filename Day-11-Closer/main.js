// =========================
// 1) Default Parameters
// =========================
const bookings = [];

const createBooking = (
  flightNumber,
  numberOfPassengers = 1,
  price = 500 * numberOfPassengers
) => {
  const booking = { flightNumber, numberOfPassengers, price };
  bookings.push(booking);
};

createBooking("AI101");
createBooking("AI102", 3);
createBooking("AI103", 6, 4000);

console.log("Bookings:", bookings);

// =========================
// 2) Objects and References
// =========================
const person = {
  name: "Shivaji",
  passport: 123456789,
};

function changePerson(person) {
  person = {
    name: "AI Engineer",
    passport: 111111111,
  };
}

changePerson(person);
console.log("After changePerson:", person);

// =========================
// 3) Mutating an Object
// =========================
function renewPassport(person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
}

renewPassport(person);
console.log("After renewPassport:", person);

// =========================
// 4) Check-in Example
// =========================
const shivaji = {
  name: "Shivaji Jagdale",
  passport: 123456789,
};

const rahul = {
  name: "Rahul Patil",
  passport: 987654321,
};

function checkIn(flightNum, passenger) {
  passenger.name = "Mr. " + passenger.name;
  const isValid = passenger.passport === 123456789;

  console.log(
    `${flightNum}: ${isValid ? "Check In Successful" : "Wrong Passport"}`
  );
}

checkIn("AI101", shivaji);
checkIn("AI102", rahul);

// =========================
// 5) Practice Function
// =========================
function newPassport(person) {
  person.passport = 999999999;
}

newPassport(shivaji);
console.log("Updated passport:", shivaji.passport);

