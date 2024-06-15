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

console.log(Array.isArray(fruits)); //checking if the element in the array is truly an array.

console.log(fruits.indexOf("oranges")); //tells us the index in which the element is located in the array.

console.log(fruits); //code compiler

//
const person = {
firstName: "James",
lastName: "Kiprop",
age: 23,
hobbies: ["swimming", "hiking", "travelling", "Gaming"],
address: {
street: "50 main st",
city: "Boston",
state: "MA",
},
};
person.email = "jameskiprop01@gmail.com"; //Directly adding properties to the attributes
// console.log(person.hobbies[1]); //calling the element on the first index position of the hobbies array
console.log(person);

//creating arrays of objects
const todos = [
{
id: 1,
text: "Take out trash",
isCompleted: true,
},

{
id: 2,
text: "Spend the weekend with my shawrie",
isCompleted: true,
},

{
id: 3,
text: "Hiking on Ngong hills on the last weekend of the month",
isCompleted: false,
},
];
console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

//For
for (let i = 0; i <= 10; i++) {
console.log(`For Loop Number: ${i}`);
}

//while
let i = 0;
while (i < 10) {
console.log(`while loop number: ${i}`);
i++;
}

//Looping through Arrays
for (let i = 0; i < todos.length; i++);
{
console.log(`For loop Number:`);
}

for (let todo of todos) {
console.log(todo.isCompleted);
}
//forEach, map, filter

// forEach
todos.forEach(function (todo) {
console.log(todo.id);
});

//map
const todoText = todos.map(function (todo) {
return todo.text;
});

console.log(todoText);

//filter
const todoCompleted = todos
.filter(function (todo) {
return todo.isCompleted === true;
})
.map(function (todo) {
return todo.text;
});
console.log(todoCompleted);

//conditionals

// const x = "6";

// if (x == 10) {
// console.log("x is equal to 10");
// } else if (x < 10) {
// console.log("x is less than 10");
// } else {
// console.log("x is greater than 10");
// }

//double conditionals

// const x = 4;
// const y = 15;

// if (x > 5 || y > 10) {
// console.log("x is more than 5 or y is more than 10");
// }

//ternary operator

const x = 12;

const color = x > 10 ? "red" : "blue";

console.log(color);

//switch

switch (color) {
case "red":
console.log("color is red");
break;
case "blue":
console.log("color is blue");
break;
default:
console.log("color is NOT red or blue");
break;
}

// functions

function addNums(num1, num2) {
console.log(num1 + num2);
}
addNums(5, 4); //calling the function

function addNums(num1 = 1, num2 = 2) {
return num1 + num2;
}
console.log(addNums(5, 5));

// const addNums = (num1) => num1 + 5;

// console.log(addNums(5));

//OOP
// //constructor function
// function Person(firstName, lastName, dob) {
// //defining a constructor function called Person as we create an object
// this.firstName = firstName;
// this.lastName = lastName;
// this.dob = new Date(dob); //storing the dob as a date object
// }
// //attaching methods and properties to the prototype
// Person.prototype.getBirthYear = function () {
// return this.dob.getFullYear(); // ()are used to immediately invoke an function
// };

// Person.prototype.getFullName = function () {
// return `${this.firstName} ${this.lastName}`;
// };

//Class
class Person {
constructor(firstName, lastName, dob) {
this.firstName = firstName;
this.lastName = lastName;
this.dob = new Date(dob); //storing the dob as a date object
}

getBirthYear() {
return this.dob.getFullYear();
}
getFullName() {
return `${this.firstName} ${this.lastName}`;
}
}
//instantiate object
const person1 = new Person("James", "Kiprop", "04-06-2001");
const person2 = new Person("Quincy", "Jones", "8-07-1980");
const person3 = new Person("Joy", "Wangecii", "6-08-2002");

console.log({ person1, person2, person3 });
