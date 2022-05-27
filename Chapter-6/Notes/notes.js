function add(a, b){
    console.log(this);
}
add(3, 2);


// This works because of arrow function
function addByValue(){
    return this.numbers.map(n => n + this.incrementValue);
}
console.log(addByValue.call({numbers : [10, 20, 30, 40, 50], incrementValue: 5}));

// Throws error
function addByValueError(){
    return this.numbers.map(function (n) {return n + this.incrementValue});
}
console.log(addByValueError.call({numbers : [10, 20, 30, 40, 50], incrementValue: 5}));


let empty = {};
console.log(empty.toString);
console.log(empty.toString());


console.log(Object);


class Dog {
    constructor(type){
        this.type = type;
    }
    bark(){
        switch(this.size){
            case 'small' : 
                return `${this.type} says wuf wuf`;
                break;
            case 'medium' : 
                return `${this.type} says woof woof`;
                break;
            case 'large' : 
                return `${this.type} says grrrrr`;
                break;
            default :
                return '?'; 
        }
    }
}
Dog.prototype.fur = 'thick';

const chihuahua = new Dog('chihuahua');
console.log(chihuahua.type);
console.log(chihuahua.bark());
chihuahua.size = 'small';
console.log(chihuahua.bark());
console.log(chihuahua.fur);
chihuahua.fur = 'thin';
console.log(chihuahua.fur);
