// ################ Function Inside Function ######################
function outer() {
    console.log("Outer Function");

    function inner() {
        console.log("Inner Function");
    }

    inner();
}

outer();