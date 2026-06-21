// primitive Vs Reference data type.

//  Primitive Type :
let a = 6;
let b= a;
console.log("value of a is",a);
console.log("value of b is",b);

a++;

console.log("after incrementing");

console.log("value of a is",a);
console.log("value of b is",b);
//  reference Type :

// Array
let  arr1 = ["aditi","roshan"];
let arr2 = arr1;

console.log("array1",arr1);
console.log("array2",arr2);
arr1.push("rohini");

console.log("after pushing new element");

console.log("array1",arr1);
console.log("array2",arr2);



