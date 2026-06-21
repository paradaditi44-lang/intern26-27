// ## ## ## ## ##    Maps    ## ## ## ## ## ## 

// Maps are Iterables.
const person = new Map();

person.set("name", "Aditi");
person.set("age", 19);

for (let item of person) {
    console.log(item);
}