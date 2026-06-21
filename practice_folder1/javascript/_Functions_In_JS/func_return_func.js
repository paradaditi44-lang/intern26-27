// function returning function
function add(){
    function mul(a,b){
        return a*b;
    }
    return mul;
}
const res=add();
console.log(res(2,5));

