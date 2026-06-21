// ############## Parameters Destructuring : ###########
const student = {
    name: "Aditi",
    age: 19
};

function printStudent({ name, age }) {
    console.log(name);
    console.log(age);
}

printStudent(student);