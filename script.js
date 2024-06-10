// script numbers, Boolean, Null, Undefined,

const name = "John";
const age = 30;
const rating = 4.5;
const isCool = true;
// const x = null;
// const y = undefined;
let z;

//concatenation
console.log("My name is " + name + " and I am " + age);

// template string
const hello = "My name is ${name} and I am ${age}";

console.log(hello);

const s = "Hello world!";

console.log(s.toLowerCase());

console.log(s.substring(0, 5).toUpperCase());

console.log(s.split(""));

//Arrays - variables that hold multiple values

const fruits = ["apples", "pears", "oranges", "dates", "pumpkins"];

fruits[5] = "grapes";

fruits.push("mangoes"); //Adds mangoes to the end

fruits.unshift("strawberries"); // adds strawberries to the beginning of the array

fruits.pop(); //pops the last element of the array off

console.log(Array.isArray(fruits)); //checking if the element in the array is truly an array

console.log(fruits.indexOf("oranges"));

console.log(fruits);

// //
// const person = {
//   firstName: "James",
//   lastName: "Kiprop",
//   age: 23,
//   hobbies: ["swimming", "hiking", "travelling", "Gaming"],
//   address: {
//     street: "50 main st",
//     city: "Boston",
//     state: "MA",
//   },
// };

// person.email = "jameskiprop01@gmail.com"; //Directly adding properties to the email

// console.log(person);

//Arrays of Objects

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCoolompleted: true,
  },
  {
    id: 2,
    text: "Go and meet with some senior developers",
    isCoolompleted: true,
  },
  {
    id: 3,
    text: "finish up on building my API",
    isCoolompleted: false,
  },
];

console.log(todos[1].text);

//for

for (let i = 0; i <= 10; i++);
{
  console.log("For Loop Number: ${i}");
}

//while

for (let i = 0; i < 10; i++);
{
  console.log("While Loop Number: ${i}");
}

//for

// todos.forEach(function (todo) {
//   console.log(todo.text);
// });

// const todoCompleted = todos
//   .filter(function (todo) {
//     return todo.isCompleted == true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });

// console.log(todoCompleted);

const x = 16;

const color = "green";

console.log(color);

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
}
//functions
function addNums(num1 = 1, num2 = 1) {
  console.log(num1 + num2);
}
addNums();
//constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName; // this points to the newly created object
  this.lastname = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob;
  };
}

//instantiate object
const person1 = new Person("John", "Doe", "4-3-1980"); //"new" initialized the new object that will be created
const person2 = new Person("Mary", "Jane", "6-5-1989");

console.log(person2);
