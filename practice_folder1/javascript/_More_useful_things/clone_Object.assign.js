// Cloning  Using Object.Assign
const student = {
    name: "Aditi",
    age: 19,
    course: "Diploma"
};

const copy = Object.assign({}, student);

console.log(copy);