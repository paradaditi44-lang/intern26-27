//  ##  Select Element by getElementbyID ##

console.log(window); // There is document object present where all the data

console.log(window.document); // Human readable representation of JS
console.dir(window.document); // JS Object what Browers See.

console.log(typeof document.getElementById("main-heading"));
// In Document Object Model --> document object of window object
console.log(document.getElementById("main-heading"));
console.dir(document.getElementById("main-heading"));

 


const headerELement = document.getElementById("main-heading");
