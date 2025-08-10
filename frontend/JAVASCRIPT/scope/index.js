console.log('scope tutorial macha')

// var vs let vs const

// scope

// ----------- different types of scopes -----------
// function scope
// global scope
// block scope

// ---function scope example
// function scope() {
//   if (true) {
//     var a = 'Sai'
//   }
//   console.log(a)
// }

// scope()
// let b = 46
// {
//   // ---------   the code inside is known as the block scope ......
//   var a = 5
//   // shadowing the variable( the outside variable that b is shadow and create a new reference inside the block scope)
//   let b = 10
//   console.log(b)
// }
// console.log(a)
// console.log(b)

// the var is function scope and (let and const) are block scopes

//NOTE: different types of shadowing in javascript

// 1. shadow var with let is fine and let with let as well
// function test() {
//   var a = 'hello'
//   let b = 'Bye '
//   if (true) {
//     let a = 'hi'
//     let b = 'goodbye'
//     console.log(a)
//     console.log(b)
//   }
// }
// test()

//2 . shadow the let variable with var is gonna throw error in javascript( Illegal shadowing..)

// function test() {
//   let a = 'hello'
//   if (true) {
//     var a = 'sai'
//     console.log(a)
//   }
// }
// test()
// because of these scope few more concepts comes in like  ***hoisting***

// var a
// var a

// this will Work
// var b
// var b

// this will not work

// var b  // these are attached to the window object
// let b  // these are kept in TDZ(temporary dead zone) still the variable should not be there on the global scoper as well

// this will throw an error the const variable is declared and intialize in the same line other wise will throw identifier error
// const a;

//    NOTE : -------------***hoisting***------

//1. before understanding the hoisting we should have the clear understanding of the ***Global Execution Context**

//these will have two phases
// 1. creation phases
// 2. Execution phase

// suppose example(refer the namaste Javascript for more clarity.....)

// let a = 10
// function multiply(x) {
//   return x * 10
// }
// let b = multiply(a)
// console.log(b)

// interview Question like

// Question 1:

// console.log(count) // undefined
// var count = 1

// console.log(x)
// let x

// console.log(x)

// JavaScript Scope, Hoisting, and Variable Behavior – Interview Guide
// 1. Types of Scope
// Global Scope – Accessible everywhere.

// Function Scope – Variables accessible only inside a function (var).

// Block Scope – Variables accessible only inside {} (let, const).

// var a = 1; // global

// function test() {
//   var b = 2; // function scope
//   if (true) {
//     let c = 3; // block scope
//     const d = 4;
//     console.log(c, d); // 3 4
//   }
//   // console.log(c); // ❌ ReferenceError
// }
// 2. var vs let vs const
// Feature	var	let	const
// Scope	Function	Block	Block
// Redeclaration	✅ Allowed	❌ Not allowed	❌ Not allowed
// Reassignment	✅ Allowed	✅ Allowed	❌ Not allowed
// Hoisted	✅ (undefined)	✅ (TDZ)	✅ (TDZ)
// Attached to window	✅ Yes	❌ No	❌ No

// 3. Shadowing
// Shadowing: Declaring a variable with the same name in an inner scope.

// ✅ Allowed:
// function test() {
//   var a = 'hello';
//   if (true) {
//     let a = 'hi';
//     console.log(a); // hi
//   }
// }
// ❌ Illegal Shadowing:

// javascript
// Copy
// Edit
// function test() {
//   let a = 'hello';
//   if (true) {
//     var a = 'hi'; // ❌ SyntaxError
//   }
// }
// 4. Hoisting
// Definition: JavaScript moves declarations to the top during the creation phase.

// var → Hoisted with undefined

// let / const → Hoisted but kept in TDZ (Temporal Dead Zone)

// javascript

// console.log(a); // undefined
// var a = 5;

// console.log(b); // ❌ ReferenceError
// let b = 10;
// 5. Temporal Dead Zone (TDZ)
// The time between entering scope and variable declaration with let or const.

// 6. Global Execution Context (GEC)
// Creation Phase

// var → undefined

// let / const → TDZ

// Functions → reference stored

// Execution Phase

// Code runs line-by-line

// 7. Interview Questions
// Q1: Output?
// console.log(a);
// var a = 10;
// Answer: undefined

// Q2: Output?
// javascript
// console.log(b);
// let b = 20;
// Answer: ReferenceError (TDZ)

// Q3: Difference between var, let, and const?
// Answer: Scope, redeclaration, reassignment, window binding.

// Q4: Output?
// {
//   var a = 1;
//   let b = 2;
// }
// console.log(a);
// console.log(b);
// Answer: 1, ReferenceError

// Q5: Illegal shadowing?
// let x = 1;
// {
//   var x = 2; // ❌ SyntaxError
// }
// Q6: Output?
// console.log(x);
// var x = 1;
// function x() {}
// console.log(x);
// Answer: Function x, then 1

// Q7: Explain TDZ with example.

// Q8: Output?
// function test() {
//   console.log(a);
//   var a = 5;
// }
// test();
// Answer: undefined

// Q9: Output?
// function outer() {
//   var a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// const fn = outer();
// fn();
// Answer: 10 (closure)

// Q10: Output?
// console.log(a);
// {
//   let a = 5;
// }
// Answer: ReferenceError

// Q11: Are var variables attached to window?
// Answer: Yes, in browsers.

// Q12: Output?
// var a = 10;
// var a = 20;
// console.log(a);
// Answer: 20

// Q13: Can const be declared without initialization?
// Answer: No, SyntaxError.

// Q14: Lifetime of a block-scoped variable?
// Answer: From entering the block until leaving (unless closure).

// Q15: Output?
// function test() {
//   console.log(a);
//   let a = 10;
// }
// test();
// Answer: ReferenceError
