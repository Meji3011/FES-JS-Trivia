// 1. What is the difference between "var" and "let"?

// Q1 answer1: "let" has block scope and "var" has function scope.

const fn = () => {
  if (true) {
    var x = 1;
    let y = 2;
  }

  console.log(x);
  console.log(y);
};

// fn();

// The function will return 1 and have a uncaught ReferenceError for y because let is block scope, which means it is only y is only defined within the {} statement in the within the function.

// Q1 answer 1 aside: what if you want a variable to be used outside of the function?

// answer: you initialize the variable before defining the value in the function.

var z;

const fn2 = () => {
  if (true) {
    z = 1;
  }

};

// fn2();

// console.log(z);

// If you initialize in global scope, you can use fn2 to define the value to 1.

// Q1 answer 2: "var" gets hoisted, "let" doesn't get hoisted.

const fnQ1a2 = () => {
  if (true) {
    console.log(s)
    s = 1;
    console.log(s)
    var s = 1;
  }
};

// fnQ1a2();

// var s = 1 is hoisted, which means that s is declared even if it comes after the line of s = 1, which initializes its value to 1. in this case, s would be undefined before any initialization instead of an referenceError.

// let is not hoisted.

// Q1 answer 3: "let" was introduced in ES2015/ES6 and "var" is in JS from the beginning.


// Q2: What is the difference between "==" and "==="?

// Q2 answer: "==" is a loose equality operator, which only checks whether the value are the same. What actually happens when you execute the JS code for "==" is that JS converts the right hand side's data type to the same as the left hand side, and then compares the two. "===" is a strict equality operator, which checks both the data type and value.

// console.log(5 === 5);        // Output: true
// console.log(5 === "5");      // Output: false
// console.log(null === null);  // Output: true
// console.log(null === undefined);  // Output: false

// console.log(5 == 5);         // Output: true
// console.log(5 == "5");       // Output: true
// console.log(null == null);   // Output: true
// console.log(null == undefined);  // Output: true


// Q3: What is the difference between "let" and "const"?

// Q3 answer: "let" can be reassigned, "const" can not be reassigned. We call this immutability.

// let x = 1:
// x = 2;
// console.log(x) // Output: 2

// const z3 = 5; // If you only have "const z3", this will return an error of not initalizing it with a value. Since const are immutable, therefore you must assign a value to it.
// z3 = 2; // You cannot do this, because const are immutable. Doing this will give you an error of attempting to assign a value to a constant variable.
// console.log(z3) 

// const arr = [1, 2, 3];
// arr.push(4) // You can do this because you're modifying the array instead of trying to declare it.
// arr = [1, 2, 3, 4]; // You cannot do this because you're trying to reassign arr.

// const obj = { a: 1, b: 2 };
// obj.c = 3; // You can do this because it is a modification.
// obj = { a: 1, b: 2, c: 3} // You cannot do this because it is a reassignment.
// console.log(obj)


// Q4: What is the difference between "undefined" and "null"?

// Q4 answer 1: An initialized variable without a value automatically gets an "undefined" value. And if you want to clean up a value it is better practice to use "null" - since developers know it was set intentionally.

// Q4 answer bonus: "undefined" has a typeof "undefined", and "null" has a typeof "object".


// Q5: How can you improve a webpage's performance?

// Q5 answer:
// a) optimize images, reduce the image file size to <100KB, or as long as it is clear enough for the user to see.
// b) Lazy load images
// c) Lazy load components, load components based on priority.
// d) Minify HTML, CSS, Javascript.
// e) Improve API response time, this is a back-end developer issue but important to know and possibly learn if you want to become fullstack.
// f) Utilize concurrent HTTP request with Promise.all


// Q6: what is "this"?

// Q6 answer 1: "this" keyword is used to refer to the object that owns it.

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fn: function () {
//     return this;
//   }
// };

// console.log(person.fn());

// In the const person above, "this" refers to "person".

// Q6 answer 2: when we use this in global scope, "this" refers to the global object(window).

// console.log(this)

// Q6 answer 3: When we use this in a function, "this" refers to the global object. If we are in strict mode, then "this" in a function is undefined.

// function fn6() {
//   console.log(this);
// }

// fn6(); //Output: Global object (window)

// "use strict"
// function fn6s() {
//   console.log(this);
// }

// fn6s(); //Output: undefined


// Q7: What is the difference between Arrow and Regular Functions?

// Q7 answer 1: Arrow functions don't have their own "this"

// const personQ7 = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function() {
//     return this;
//   }
// }

// console.log(personQ7.fullName()); //Output: personQ7 as an object.

// const personQ7Arrow = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: () => {
//     return this;
//   }
// }

// console.log(personQ7Arrow.fullName()); //Output: Global object (window)

// Q7 answer 2: Arrow functions don't have the arguments object.

// function fnQ7() {
//   console.log(arguments);
//   console.log(arguments[0], arguments[1]);
// }

// fnQ7('frontend', 'simplified');

// const fnQ7Arrow = () => {
//   console.log(arguments);
// }

// fnQ7Arrow('frontend', 'simplified');


// Q8: Difference between function declaration & function expression?

// Q8 answer 1: Syntax.

// Function declaration starts with "funciton" then the function name (funcD)

// Q8 answer 2: Hoisting

// Function declarations are hoisted, can be called before it is declared.
// Function expressions behave like a variable, so it has variable scope.

// console.log(funcD()); // function declaration, which will return undefined. What happens is that function funcD() is hoisted, so it actually gets executed first.

// console.log(funcE()); // will return error.

// function funcD() {
//   console.log("function declaration");
// }

// let funcE = function () {
//   console.log("function expression");
// }


// Q9 setTimeout() type questions about what happens when you have a setTimeout() in the code.

// Example:

setTimeout(() => {
  console.log('a');
}, 0)
console.log('b');
console.log('c');

// The output is b, c, then a.

// So what happens is that when you run this code, the stack will add main() to run the code.
// It'll read the setTimeout() function and then push it to the web Api, because it has setTimeout. the code gets pushed to the web Api and the web Api will see that there is a 0 second timeout, so it pushes the code to a task queue.
// The stack will then read the other lines, will will console log b and c in the console.
// After executing all the code, the stack will remove main(), and then execute code that are in the task queue, therefore the "a" shows up last in the console. So what I need to remember is that the stack will not run anything in the task queue until there is nothing in the stack, aka running main() and the code that it needs to execute.

// console.log('front');

// fetch('api.com/users').then((res) => {
//   console.log(res);
// });
// Warning: This code does not actually work, but only an example.

// console.log('simplified');

// This example is similar in the sense that the output is front, simplified, then the result from the data fetched from the api.
// The stack initializes by adding a main(), and then executes the code line by line.
// When it reads the line for fetching data, it'll push the fetch reqeust to the web API, which will return the result and push it into the task queue. This is a similar process as task queue only gets executed after all the code is executed.