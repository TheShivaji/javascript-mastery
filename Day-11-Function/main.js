// // =========================
// // 1) Default Parameters
// // =========================
// const bookings = [];

// const createBooking = (
//   flightNumber,
//   numberOfPassengers = 1,
//   price = 500 * numberOfPassengers
// ) => {
//   const booking = { flightNumber, numberOfPassengers, price };
//   bookings.push(booking);
// };

// createBooking("AI101");
// createBooking("AI102", 3);
// createBooking("AI103", 6, 4000);

// console.log("Bookings:", bookings);

// // =========================
// // 2) Objects and References
// // =========================
// const person = {
//   name: "Shivaji",
//   passport: 123456789,
// };

// function changePerson(person) {
//   person = {
//     name: "AI Engineer",
//     passport: 111111111,
//   };
// }

// changePerson(person);
// console.log("After changePerson:", person);

// // =========================
// // 3) Mutating an Object
// // =========================
// function renewPassport(person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// }

// renewPassport(person);
// console.log("After renewPassport:", person);

// // =========================
// // 4) Check-in Example
// // =========================
// // const shivaji = {
// //   name: "Shivaji Jagdale",
// //   passport: 123456789,
// // };

// // const rahul = {
// //   name: "Rahul Patil",
// //   passport: 987654321,
// // };

// // function checkIn(flightNum, passenger) {
// //   passenger.name = "Mr. " + passenger.name;
// //   const isValid = passenger.passport === 123456789;

// //   console.log(
// //     `${flightNum}: ${isValid ? "Check In Successful" : "Wrong Passport"}`
// //   );
// // }

// // checkIn("AI101", shivaji);
// // checkIn("AI102", rahul);

// // // =========================
// // // 5) Practice Function
// // // =========================
// // function newPassport(person) {
// //   person.passport = 999999999;
// // }

// // newPassport(shivaji);
// // console.log("Updated passport:", shivaji.passport);


// const users = [
//   { id: 1, name: "Shivaji Jagdale" },
//   { id: 2, name: "Virat Kohli" },
//   { id: 3, name: "Rohit Sharma" },
//   { id: 4, name: "Hardik Pandya" },
// ];

// users.forEach(function(user) {
// user.username = user.name.toLowerCase().split(" ").
// map((username) => {
//   return username[0]
// }).join('')
// })
// console.log(users)

//Email Generator (map)
// const users = [
//   {
//     firstName: "Virat",
//     lastName: "Kohli",
//   },
//   {
//     firstName: "Rohit",
//     lastName: "Sharma",
//   },
//   {
//     firstName: "Hardik",
//     lastName: "Pandya",
//   },
// ];

// const emailGen = users.map(function(user) {
//   const userFirst = user.firstName.toLowerCase();
//   const userLast = user.lastName.toLowerCase()
//   return `${userFirst +'.' +userLast + "@gmail.com"}`
// })


// console.log(emailGen)

// const cart = [
//   {
//     product: "Laptop",
//     price: 60000,
//     quantity: 1,
//   },
//   {
//     product: "Mouse",
//     price: 800,
//     quantity: 2,
//   },
//   {
//     product: "Keyboard",
//     price: 2000,
//     quantity: 3,
//   },
// ];

// const cartWithTotal = cart.map((product) => {
//   return {
//     ...product,
//     total: product.price * product.quantity,
//   };
// });

// console.log(cartWithTotal);
// console.log(cart);

//Employee Bonus System ⭐⭐⭐
const employees = [
  {
    id: 1,
    name: "Virat",
    department: "Engineering",
    salary: 90000,
  },
  {
    id: 2,
    name: "Rohit",
    department: "HR",
    salary: 45000,
  },
  {
    id: 3,
    name: "Gill",
    department: "Engineering",
    salary: 120000,
  },
  {
    id: 4,
    name: "Hardik",
    department: "Sales",
    salary: 70000,
  },
];

const newSystem = employees.map((employee) => {
  let bonus;
  let department = employee.department
  let grade = department == "Engineering" ? "A" : department == "Sales" ? "B" : department == "HR" ? "C" : "no department grade is available"
  let salary = employee.salary
  if (salary >= 100000) {
    bonus = salary * 20 / 100
  } else if (salary >= 70000) {
    bonus = salary * 10 / 100
  } else {
    bonus = salary * 5 / 100
  }
  return {
    ...employee,
    bonus: bonus,
    finalSalary: salary + bonus,
    grade,


  }
})
console.log(newSystem)

