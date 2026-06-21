// ###################### Reduce Method ###################
const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((acc, num) => {
    return acc + num;
}, 0);

console.log(sum);