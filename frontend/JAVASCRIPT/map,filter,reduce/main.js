// map ,filter and reduce

// what is Map()?

const nums = [1, 2, 3, 4]

const mutliplyThree = nums.map(function (num) {
  //   console.log(num, i, arr)
  //   console.log(this)// here this is reference to the function declartion that means it is window scope or global scope
  //   It is is arrow function then it is undefined or {} because the arrow does not any kind of this Context
  return num * 3
})
console.log(mutliplyThree)

// What is filter()?

const numbers = [1, 2, 3, 4]

const moreThanTwo = numbers.filter((num, i, arr) => {
  //   console.log(num)
  return num > 2
})

// what is Reduce()?

const list = [1, 2, 3, 4, 5]
const sum = list.reduce((acc, curr) => {
  return acc + curr
}, 0)

console.log(sum)

// polyfill for Map()

// Array.map((num,i,arr)=>{})
Array.prototype.myMap = function (cb) {
  let temp = []
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this))
  }
  return temp
}
const polyfillmap = nums.myMap((nums, i, arr) => {
  return nums * 2
})

console.log(polyfillmap)

//polyfill for filter()

Array.prototype.myFilter = function (cb) {
  let temp = []
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this))
  }
}
const myreducePolyfill = nums.filter((nums) => {
  return nums > 2
})
console.log(myreducePolyfill)

// Polyfill for Reduce()?

//  array.reduce((acc,curr)=>{},initialValue)
Array.prototype.myReduce = function (cb, initialValue) {
  var accumlator = initialValue
  for (let i = 0; i < this.length; i++) {
    accumlator = accumlator ? cb(accumlator, this[i], i, this) : this[i]
  }
  return accumlator
}
console.log(nums)
const mySum = nums.myReduce((acc, curr) => {
  return acc + curr
})
console.log(mySum)

// Interview Questions

let students = [
  { name: 'Sai', rollNumber: 31, marks: 80 },
  { name: 'Venkat', rollNumber: 23, marks: 56 },
  { name: 'prased', rollNumber: 23, marks: 23 },
]

// option-1 : (we can choose map function):
// const names = students.map((obj) => {
//   return { name: obj.name.toUpperCase(), ...obj }
// })
// console.log(names)

// (option-2): traditional ForLoop :
// let NamesArr = []
// for (let i = 0; i < students.length; i++) {
//   const obj = {
//     ...students[i],
//   }
//   obj.name = students[i].name.toUpperCase()
//   NamesArr.push(obj)
// }
// console.log(NamesArr)

// for in loop

// this for in loop is mostly used with the object we can use with array well it will be more sensible if you use it with the object rather than array

// for of loop
// this for of loop is mostly used with array because it give direct value of the array and we can also use it with the objects as well macha

// forEach as well ===>>>>>
// this is the forEach most tranditional and it loops through each element in an array and applies callback function  to each element  and it wont return any array

// 2.Question-2: REturn Only details of those who scored more than 60 marks

// const filteredArray = students.filter((obj) => obj.marks > 60)

// console.log(filteredArray, '===>>>>')

// const totalMarks = students.reduce((acc, curr) => {
//   return acc + curr.marks
// }, 0)

// console.log(totalMarks)

// Question 5 = return only names of students who scored more than 60 array allow chaining of methods

// const filteredStudents = students.filter((obj) => obj.marks > 60).map((obj) => obj.name)

// console.log(filteredStudents)

// const totalMarks = students
//   .map((obj) => {
//     let Marks = obj.marks
//     if (Marks < 60) {
//       obj.marks = obj.marks + 20
//     }
//     return obj
//   })
//   .filter((obj) => {
//     return obj.marks > 60
//   })
//   .reduce((acc, curr) => {
//     return acc + curr.marks
//   }, 0)
// console.log(totalMarks)

// // -------------------- MAP --------------------
// Array.prototype.myMap = function(callback, thisArg) {
//   if (typeof callback !== "function") {
//     throw new TypeError(callback + " is not a function");
//   }

//   const arr = this;
//   const result = new Array(arr.length); // preserve length for sparse arrays

//   for (let i = 0; i < arr.length; i++) {
//     if (i in arr) {
//       result[i] = callback.call(thisArg, arr[i], i, arr);
//     }
//   }

//   return result;
// };

// // -------------------- FILTER --------------------
// Array.prototype.myFilter = function(callback, thisArg) {
//   if (typeof callback !== "function") {
//     throw new TypeError(callback + " is not a function");
//   }

//   const arr = this;
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i in arr) {
//       if (callback.call(thisArg, arr[i], i, arr)) {
//         result.push(arr[i]);
//       }
//     }
//   }

//   return result;
// };

// // -------------------- SOME --------------------
// Array.prototype.mySome = function(callback, thisArg) {
//   if (typeof callback !== "function") {
//     throw new TypeError(callback + " is not a function");
//   }

//   const arr = this;

//   for (let i = 0; i < arr.length; i++) {
//     if (i in arr) {
//       if (callback.call(thisArg, arr[i], i, arr)) {
//         return true; // short-circuit
//       }
//     }
//   }

//   return false;
// };

// // -------------------- EVERY --------------------
// Array.prototype.myEvery = function(callback, thisArg) {
//   if (typeof callback !== "function") {
//     throw new TypeError(callback + " is not a function");
//   }

//   const arr = this;

//   for (let i = 0; i < arr.length; i++) {
//     if (i in arr) {
//       if (!callback.call(thisArg, arr[i], i, arr)) {
//         return false; // short-circuit
//       }
//     }
//   }

//   return true;
// };
