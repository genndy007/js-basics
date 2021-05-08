// for es5+ working
'use strict';

// JS Basics
//
//
// Lecture

// var, let, const
var myVar = 'global variable';
let myLet = 'context variable';
const myConst = 'constant';

// console+alert debugging
console.log(myVar);
alert(myLet);

// Arrays
let arr = [1, 'a', true];

for (idx of arr) {
    console.log(arr[idx]);
}

console.log(arr.length);

// Objects
let obj = {
    age: 10,
    profession: 'Programmer',
    isMarried: false,
};

// For In
for (key in obj) {
    console.log(obj[key]);
}

// Adding properties to object
let objEmpty = {};

objEmpty.name = 'Paul';
objEmpty.age = 45;
objEmpty.weight = 80;

for (key in objEmpty) {
    // Objects as associative arrays
    console.log(objEmpty[key]);
}

// Hoisting
num = 4;
num + 3;
var num;
console.log(num);

// Functions
//
//
// Lecture

// Hoisting
showNumber(11, 2);
// Declaration, params, default params
function showNumber(num, times = 1) {
    for (let i = 0; i < times; i++) console.log(num);
}

// Function declaration
const showString = function (str, times = 1) {
    for (let i = 0; i < times; i++) console.log(str);
};

// Arrow function
let add = (a, b) => console.log(a + b);

// Anonymous function as a parameter to another function
setTimeout(function () {
    console.log('Log after half a second');
}, 500);

// Named function expression
const outerFunc = function innerFunc(param) {
    // Show innerFunc function text
    console.log(innerFunc);
};

// Function changing assignment
add = (a, b) => console.log('A is' + a + '\n B is' + b);

// Closures
//
//
// Lecture

// Lexical Environment

let someNum = 5;
// Function will return 15 because someNum is redeclared
const calculate = () => {
    let someNum = 10;
    return someNum + 5;
};

// IIFE
(function (a, b, c) {
    console.log(a * b * c);
})(2, 3, 4);

// Different closures
function createFunc() {
    return function () {
        console.log('inside function');
    };
}

let insideFunc = createFunc(); // create
insideFunc(); // execute

// Closure with parameters
function createProgrammer(name) {
    return function (age) {
        return { name: name, age: age };
    };
}

let programmer = createProgrammer('John');
let john16 = programmer(16);

// Module pattern
const CalculatorModule = (function () {
    return {
        subtract: function (a, b) {
            console.log(a - b);
        },
        divide: function (a, b) {
            console.log(a / b);
        },
    };
})();

CalculatorModule.subtract(4, 2); // 2
CalculatorModule.divide(8, 2); // 4

// Event listener for HTML element using closure
