// ########### Call back Function  #############
function greet(name){
    console.log("hello"+name);
    
}
function process(callback){
    callback("aditi");
}
process(greet);