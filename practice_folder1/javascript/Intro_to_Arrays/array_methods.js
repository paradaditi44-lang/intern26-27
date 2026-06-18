
//---------------------------------------------------------------
// to check Array we use isArray

let fruits = ["apple","mango","grapes"];

console.log(typeof fruits);
console.log(Array.isArray(fruits));


//---------------------------------------------------------------


// push
fruits.push("banana");
console.log(fruits);

//---------------------------------------------------------------


let poppedelement=fruits.pop();
console.log(fruits);
console.log(poppedelement);
//---------------------------------------------------------------
// unshift

fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);


// shift


let shiftedele = fruits.shift();
console.log(fruits);
console.log(shiftedele);

/*
 The shift() function lets you remove an item from the start
 of an array. 
 
 The the unshift() function adds one or more items to the
 start of an array. 

*/

//---------------------------------------------------------------

/* Push Pop is faster than shift unshift */