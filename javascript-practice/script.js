// ============================================================
// 🚀 JAVASCRIPT CODING CHALLENGE — HARD LEVEL
// ============================================================

/*
You are working with a company that manages a large collection
of employees and their project assignments.

Your goal is to analyze the employee data using modern
JavaScript array methods and return meaningful information
from the dataset.

You should solve each task step-by-step without changing the
original employees array.

Use modern JavaScript concepts such as:
map, filter, find, some, every, includes, flat, Set,
spread operator, reduce, Math.max, Math.min, and sorting
where appropriate.

IMPORTANT:
Do not manually write the expected answers.
Your program must calculate them from the data.

------------------------------------------------------------
📊 DATA
------------------------------------------------------------
*/

const employees = [
  {
    name: "Rahul",
    age: 28,
    department: "Engineering",
    salary: 85000,
    skills: ["JavaScript", "React", "Node.js"],
    projects: ["DevPortal", "ChatApp"],
    active: true,
  },
  {
    name: "Priya",
    age: 32,
    department: "Engineering",
    salary: 105000,
    skills: ["JavaScript", "TypeScript", "Node.js", "AWS"],
    projects: ["CloudSystem", "DevPortal"],
    active: true,
  },
  {
    name: "Amit",
    age: 24,
    department: "Design",
    salary: 65000,
    skills: ["Figma", "CSS", "UI/UX"],
    projects: ["MobileApp"],
    active: true,
  },
  {
    name: "Sneha",
    age: 29,
    department: "Engineering",
    salary: 95000,
    skills: ["Python", "Django", "PostgreSQL"],
    projects: ["Analytics", "CloudSystem"],
    active: false,
  },
  {
    name: "Vikas",
    age: 35,
    department: "Management",
    salary: 120000,
    skills: ["Leadership", "Communication", "Excel"],
    projects: ["DevPortal", "Analytics"],
    active: true,
  },
  {
    name: "Neha",
    age: 26,
    department: "Engineering",
    salary: 78000,
    skills: ["JavaScript", "React", "MongoDB"],
    projects: ["ChatApp", "MobileApp"],
    active: true,
  },
  {
    name: "Arjun",
    age: 31,
    department: "Engineering",
    salary: 115000,
    skills: ["TypeScript", "React", "Node.js", "Docker"],
    projects: ["CloudSystem", "DevPortal"],
    active: false,
  },
  {
    name: "Kiran",
    age: 27,
    department: "Design",
    salary: 72000,
    skills: ["Figma", "Photoshop", "UI/UX"],
    projects: ["MobileApp", "ChatApp"],
    active: true,
  },
];


/*
============================================================
🎯 TASK 1 — Employee Information
============================================================

Create a variable called `employeeNames`.

It should contain only the names of all employees.

The result must be generated from the `employees` array.

Do not manually create the names array.

*/
const employeeNames = employees.map((emp) => {
  return emp.name
})
console.log(employeeNames)

/*
============================================================
🎯 TASK 2 — High Salary Employees
============================================================

Find all employees whose salary is greater than 90000.

Store the result in a variable called `highSalaryEmployees`.

The result should contain the complete employee objects.

*/
const highSalaryEmployees = employees.filter((emp) => {
  return emp.salary > 90000
})
console.log(highSalaryEmployees)

/*
============================================================
🎯 TASK 3 — Active Engineers
============================================================

Find all employees who:

1. Belong to the "Engineering" department
2. Are currently active

Store the result in a variable called `activeEngineers`.
*/

const activeEngineers = employees.filter((emp) => {
  return emp.department == "Engineering" && emp.active == true
})

console.log(activeEngineers)


/*
============================================================
🎯 TASK 4 — Find a Specific Employee
============================================================

Find the employee whose name is "Arjun".

Store the complete employee object in a variable called
`arjun`.

If the employee does not exist, the result should naturally
be undefined.
*/
const arjun = employees.find((emp) => {
  return emp.name == "Arjun"
})
console.log(arjun)
/*
============================================================
🎯 TASK 5 — JavaScript Developers
============================================================

Find all employees who have "JavaScript" in their skills.

Store the result in:

`javascriptDevelopers`

*/
const javascriptDevelopers = employees.filter((emp) => {
  return emp.skills.includes("JavaScript")
})
console.log(javascriptDevelopers)
/*
============================================================
🎯 TASK 6 — Employee Project List
============================================================

Every employee can work on multiple projects.

Create a variable called `allProjects`.

It should contain all projects from all employees.

At this stage, duplicate project names are allowed.

Example structure:

[
  "DevPortal",
  "ChatApp",
  "CloudSystem",
  ...
]
*/
const allProject  = employees.flatMap(function(emp){
  return emp.projects
})
console.log(allProject)

/*
============================================================
🎯 TASK 7 — Unique Projects
============================================================

Using the result from Task 6, create:

`uniqueProjects`

It should contain each project only once.

No duplicate project names should exist.

*/

const uniqueProjects = [...new Set(allProject)]

console.log(uniqueProjects)

/*
============================================================
🎯 TASK 8 — Highest Paid Employee
============================================================

Find the employee with the highest salary.

Store the complete employee object in:

`highestPaidEmployee`

Do not manually compare every employee.

The solution should work even if the employee data changes.

*/

const highestPaidEmployee = employees.reduce((highest, emp) => {
  return emp.salary > highest.salary ? emp : highest;
});

console.log(highestPaidEmployee);

/*
============================================================
🎯 TASK 9 — Average Salary
============================================================

Calculate the average salary of all employees.

Store the result in:

`averageSalary`

The calculation must be performed dynamically from the
employees array.

------------------------------------------------------------
✍️ YOUR CODE — TASK 9
------------------------------------------------------------






============================================================
*/


/*
============================================================
🎯 TASK 10 — Department Salary Analysis
============================================================

Calculate the total salary paid to all Engineering employees.

Store the result in:

`engineeringSalary`

Only Engineering employees should be included.

------------------------------------------------------------
✍️ YOUR CODE — TASK 10
------------------------------------------------------------






============================================================
*/


/*
============================================================
🎯 TASK 11 — Skill Analysis
============================================================

Create a variable called:

`allSkills`

It should contain every skill possessed by every employee.

Duplicates are allowed at this stage.

Then create:

`uniqueSkills`

which contains every skill only once.

------------------------------------------------------------
✍️ YOUR CODE — TASK 11
------------------------------------------------------------






============================================================
*/


/*
============================================================
🎯 TASK 12 — Multi-Skill Developers
============================================================

Find employees who have BOTH:

"JavaScript"

AND

"Node.js"

in their skills.

Store the result in:

`fullStackDevelopers`

------------------------------------------------------------
✍️ YOUR CODE — TASK 12
------------------------------------------------------------






============================================================
*/


/*
============================================================
🎯 TASK 13 — Project Team Search
============================================================

Find all employees who are working on the project:

"DevPortal"

Store the result in:

`devPortalTeam`

------------------------------------------------------------
✍️ YOUR CODE — TASK 13
------------------------------------------------------------






============================================================
*/


/*
============================================================
🎯 TASK 14 — Company-Wide Skill Check
============================================================

Check whether at least one employee knows:

"Docker"

Store the boolean result in:

`hasDockerExpert`

------------------------------------------------------------
✍️ YOUR CODE — TASK 14
------------------------------------------------------------






============================================================
*/


/*
============================================================
🎯 TASK 15 — Universal Skill Check
============================================================

Check whether every employee has at least one skill.

Store the boolean result in:

`everyoneHasSkill`

------------------------------------------------------------
✍️ YOUR CODE — TASK 15
------------------------------------------------------------






============================================================
*/


/*
============================================================
🎯 TASK 16 — Employee Summary
============================================================

Create a new array called:

`employeeSummaries`

Each element should contain only:

{
  name,
  department,
  salary
}

Do not include age, skills, projects, or active status.

------------------------------------------------------------
✍️ YOUR CODE — TASK 16
------------------------------------------------------------






============================================================
*/


/*
============================================================
⏭️ TASK 17 — Salary Ranking
============================================================

⚠️ TEMPORARILY SKIP THIS TASK.

We will come back to this task after completing Task 20.

------------------------------------------------------------
TASK:

Create a new array called:

`salaryRanking`

It should contain employees ordered from:

Highest salary → Lowest salary

Do not destroy or modify the original `employees` array.

------------------------------------------------------------
✍️ YOUR CODE — TASK 17

⏭️ SKIPPED FOR NOW.

============================================================
*/


/*
============================================================
🎯 TASK 18 — Senior Engineers
============================================================

Find Engineering employees whose age is greater than 28.

Store them in:

`seniorEngineers`

------------------------------------------------------------
✍️ YOUR CODE — TASK 18
------------------------------------------------------------






============================================================
*/


/*
============================================================
🎯 TASK 19 — Active Project Count
============================================================

Calculate the total number of projects being handled by
ACTIVE employees only.

Store the result in:

`activeProjectCount`

Important:

If multiple active employees work on the same project,
count each assignment.

For example, if two employees work on "DevPortal",
that counts as 2 project assignments.

------------------------------------------------------------
✍️ YOUR CODE — TASK 19
------------------------------------------------------------






============================================================
*/


/*
============================================================
🎯 TASK 20 — Most Common Project
============================================================

Find which project appears most frequently across all
employees.

Store the project name in:

`mostCommonProject`

The answer must be calculated dynamically.

Do not manually write the project name.

------------------------------------------------------------
✍️ YOUR CODE — TASK 20
------------------------------------------------------------






============================================================
*/


/*
============================================================
🔥 BONUS — Advanced Challenge
============================================================

Create a variable called:

`companyReport`

It should be an object containing:

{
  totalEmployees,
  activeEmployees,
  inactiveEmployees,
  averageSalary,
  highestPaidEmployee,
  uniqueDepartments,
  uniqueProjects,
  uniqueSkills
}

Every value must be calculated dynamically from the
employees array.

Do not manually enter any result.

------------------------------------------------------------
✍️ YOUR CODE — BONUS
------------------------------------------------------------






============================================================
*/


/*
============================================================
⚠️ RULES
============================================================

1. Do not modify the original `employees` array.

2. Do not manually write expected answers.

3. Use JavaScript array methods wherever appropriate.

4. Try to solve each task using the simplest readable logic.

5. Do not use external libraries.

6. Do not search for the solution.

7. Solve one task at a time.

8. Understand the logic before writing the code.

============================================================
🔥 DIFFICULTY: HARD
============================================================
*/



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





