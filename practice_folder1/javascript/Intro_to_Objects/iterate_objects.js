// How to iterate in Objects
const student = {
    name : "prerna",
    age : 23,
    cousre:"diploma"
};

// ###  1. for in loop
for(let key in student){
    console.log(key,student[key]);
}

//2.object and value
const person={
    name:"aditi";
    age:19;
};
console.log(person.name);
console.log(person.age);