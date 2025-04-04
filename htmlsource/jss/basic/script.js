let a = 3;
console.log(typeof a);
a = 'test';
console.log(a)
console.log(typeof a);

const b = 15;
console.log(b);

{
    let a = 333;
    console.log("block-scope ", a);
}
function foobar(){
    var foo = 9;
    console.log(foo);
}
// console.log(foo);
if(true){
    let bb= 5;
    console.log("let block-scope ",bb);
}
// console.log("let block-scope ",bb);
