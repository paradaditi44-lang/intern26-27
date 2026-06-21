
// 1. Slice Method
// 2. Concat
// 3. Spread Operator
//clone with slice method
let fruits1=["apple","mango"];
// let fruits1=fruits2;
let fruits2=fruits1.slice(0)

fruits1.push("orange");

console.log(fruits2==fruits1);
console.log(fruits1);
console.log(fruits2);

// cloning with Concat

let name1=["aditi","roshani"];
// let name2 = name1
let name2=[].concat([name1]);

name1.push("parad");
console.log(name1==name2);
console.log(name1);
console.log(name2);

// cloning with Spread Operator

let array_1=["item1","item2"];
let array_2=[...array_1];

array_1.push("item3");
console.log(array_1==array_2);
console.log(array_1);
console.log(array_2);
