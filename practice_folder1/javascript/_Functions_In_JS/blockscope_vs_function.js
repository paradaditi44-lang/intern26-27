// Block Scope Vs Function Scope
//block scope

{
    let name="aditi parad";
    console.log(name);
}
// console.log(name);//error

//function scope
function greet(){
    var msg="hellooo";
   console.log(msg);
}
greet();
