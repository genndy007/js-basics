// var, let, const
var myVar = 'global variable';
let myLet = 'context variable';
const myConst = 'constant';

// console+alert debugging
console.log(myVar);
alert(myLet);

let arr = [1, 'a', true];

for (idx of arr) {
    console.log(arr[idx]);
}

console.log(arr.length);

let obj = {
    age: 10,
    profession: 'Programmer',
    isMarried: false,
};

for (key in obj) {
    console.log(obj[key]);
}

let objEmpty = {};

objEmpty.name = 'Paul';
objEmpty.age = 45;
objEmpty.weight = 80;

for (key in objEmpty) {
    console.log(objEmpty[key]);
}
