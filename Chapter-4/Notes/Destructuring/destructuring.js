// Destructuring Objects

// Array 
let [x, y] = [33, 100];
console.log(x, y); // x = 33, y = 100

// Swaps With Destructuring
[y, x] = [x, y]; // x = 100, y = 33
console.log(x, y);

// Object
const obj1 = {prop1 : "Hello", prop2 : "Welcome"};
let {prop1, prop2} = obj1;
console.log(prop1, prop2);

// Object Value Swapping
[prop2, prop1] = [prop1, prop2];
console.log(prop1, prop2);

// Nested
const obj2 = {prop1b: "I", prop2b: "was", prop3b: {prop4b:"Nested", prop5b:"So Was I"}};
let {prop1b, prop2b, prop3b:{prop4b, prop5b}} = obj2;
console.log(prop4b, prop5b);

// Nested And Changing Variable Names
let {prop1b : variable1, prop2b : variable2, prop3b:{prop4b : variable3, prop5b : variable4}} = obj2;
console.log(variable1, variable2, variable3, variable4);

// Function
const obj3 = {age: 300, country: 'Walachia', name: 'Vladimir', surname: 'Tepes'};
function greetVisitor({name, surname}){
    console.log(`Welcome to Knottsberry Farms ${name} ${surname}!`);
}
greetVisitor(obj3);