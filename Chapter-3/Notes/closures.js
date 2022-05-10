// Examples of closures

// Simple Closure
var operand = 3;
function subtractFromTen(){
    return 10 - operand;
}
console.log(subtractFromTen(operand)); // Expect 7
var operand = 6;
console.log(subtractFromTen(operand)); // Expect 4


// Using closure as an adder
let count = 0;
function makeAdder(x){
    return function addTo(y){
        return x + y;
    }
}
let add5 = makeAdder(5);
let sum = add5(3); 
console.log(sum);// Expect 8

// Using Closure to return two strings
function helloOuter(yourName){
    return function helloInner(myName){
        console.log(`Hello ${yourName}!`);
        console.log(`You can call me ${myName}`);
    }
}
let greeting = helloOuter('Thomas');
greeting('Jeremiah');