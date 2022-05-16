/*************************************************
* Filter
*************************************************/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const restaurants = [
    {name: "The Brunch", open: true},
    {name: "Homely Café", open: false},
    {name: "The Eat Spot", open: false},
    {name: "The Hash House", open: true},
    {name: "The Pit Spot", open:true}
];

function isEven(num){
    return num % 2 === 0;
}

function isOpen(obj){
    return obj.open;
}

const evenNumbersA = numbers.filter(isEven);
console.log(evenNumbersA);

const evenNumbersB = numbers.filter((num) => {
    return num % 2 === 0});
console.log(evenNumbersB);

const evenNumbersC = numbers.filter(num => num % 2 === 0);
console.log(evenNumbersC);

const evenNumbersD = numbers.filter(num => num % 2);
console.log(evenNumbersD);

const openRestaurants = restaurants.filter(res => res.open);
console.log(openRestaurants);


/*************************************************
* forEach
*************************************************/
const names = ['Tom', 'Jerry', 'William', 'Mariah'];

names.forEach((name, ind, arr) => console.log(name, ind, arr));

let totalPrice = 0;
const prices = [3.25, 300, 0.75, 22, 13, 2340];
prices.forEach(price => {
    totalPrice += price;
    console.log(`Total Price So Far: ${totalPrice}`);
});

/*************************************************
* Callbacks And Higher Order Function Examples
*************************************************/
function x(callback){
    return callback();
}

function log5(){
    console.log('Five');
}
x(log5);

const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getLarger(x, y){return x > y ? x : y};
function getSmaller(x, y){return x < y ? x : y};

function comparison(callback, array){
    let result;
    for (let i = 0; i < array.length; i++) result = callback(result, array[i]);
    return result;
}

console.log(comparison(getLarger, exampleArray));
console.log(comparison(getSmaller, exampleArray));


/*************************************************
* Map
*************************************************/
const restaurants2 = [
    {name: "The Brunch", open: true, stars: 4},
    {name: "Homely Café", open: false, stars:3},
    {name: "The Eat Spot", open: false, stars: 4},
    {name: "The Hash House", open: true, stars: 2},
    {name: "The Pit Spot", open:true, stars: 2}
];

const restsFiltered = restaurants2.filter(restaraunt => restaraunt.open === true);
const openRests = restsFiltered.map(restaraunt => restaraunt.name);
const addStar = restaurants2.map(restaraunt => restaraunt.stars + 1);
console.log(openRests);
console.log(addStar);

/*************************************************
* Sort
*************************************************/
const years = [1999, 2000, 999, 1400, 3200, 2020, 1965, 10000];
const sortedYears = years.sort((year1, year2) => year1 > year2 ? 1 : -1);
console.log(sortedYears);

/*************************************************
* Reduce
*************************************************/
const charges = [50, 320, 75, 2.50, 1.00, 75, 3250];

const totalCharges = charges.reduce((charge, total) => total += charge, 0);
console.log(totalCharges);