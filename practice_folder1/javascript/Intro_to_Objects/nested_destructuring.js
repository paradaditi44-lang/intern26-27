// Nested Destructing


const users = [
    {
    userid : 1,
    user_name: "aditi",
    gender : "female"},
    {
    userid : 2,
    user_name: "yogita",
    gender : "female"},
    {
    userid: 3,
    user_name: "athrava",
    gender : "male"},

]

// Assigning variable as well
const[{user_name : user2_username,userid},,{gender:user3_gender}] = users;
console.log(user2_username);
console.log(user3_gender);
console.log(userid2);
