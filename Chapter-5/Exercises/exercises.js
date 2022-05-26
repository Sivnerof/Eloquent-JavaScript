require("../Notes/Examples/code/scripts.js");

/*
    Problem 1: Flattening

    Use the reduce method in combination with the concat method to “flatten”
    an array of arrays into a single array that has all the elements of the original
    arrays.
*/

// My Solution 1:
const twoDimArray = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
const flattenedArray = twoDimArray.reduce((prevValue, currValue) => prevValue.concat(currValue), []);

// EJS Solution 1:
console.log(twoDimArray.reduce((flat, current) => flat.concat(current), []));


/*
    Problem 2: Your own loop

    Write a higher-order function loop that provides something like a for loop statement.
    It takes a value, a test function, an update function, and a body function.
    Each iteration, it first runs the test function on the current loop value
    and stops if that returns false.
    Then it calls the body function, giving it the current value.
    Finally, it calls the update function to create a new value and starts from the beginning.
    When defining the function, you can use a regular loop to do the actual looping.
*/

// My Solution 2:
function loop(val, test, update, body){
    for (let i = val; !test(i); i = update(i)) body(i);
}
loop(0, n => n === 5 ? true : false, n => ++n, console.log);

// EJS Solution 2:
function loopEJS(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
}


/*
    Problem 3: Everything

    Analogous to the some method, arrays also have an every method.
    This one returns true when the given function returns true for every element in the array.
    In a way, some is a version of the || operator that acts on arrays,
    and every is like the && operator.
    Implement every as a function that takes an array and a predicate function as parameters.
    Write two versions, one using a loop and one using the some method.
*/

// My Solution 3:
function everyWithLoop(array, test){
    for (let elem of array) if (!test(elem)) return false;
    return true;
}

function everyWithSome(array, test){
    return !array.some(elem => !test(elem));
}

function isEven(n){
    return n % 2 === 0;
}

// EJS Solution 3:
function everyWithLoopEJS(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
}

function everyWithSomeEJS(array, predicate) {
    return !array.some(element => !predicate(element));
}


/*
    Problem 4: Dominant writing direction

    Write a function that computes the dominant writing direction in a string of text.
    Remember that each script object has a direction property that can be
    "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
    The dominant direction is the direction of a majority of the characters that
    have a script associated with them.
    The characterScript and countBy functions defined earlier in the chapter are probably useful here.
*/

// My Solution 4:
function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

function dominantDirection(text){
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
    return scripts.reduce((a, b) => a.count > b.count ? a : b).name;
}
console.log(dominantDirection("العالم الثالث كأنها ممتلكاتها هي، بغض النظر عن وضع الناس في"));
console.log(dominantDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
console.log(dominantDirection("Hey, مساء الخير"));
console.log(dominantDirection("hey, oh, oh, hey, Hey, مساء الخير hey"));

// EJS Solution 4:
function dominantDirectionEJS(text) {
    let counted = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
  
    if (counted.length == 0) return "ltr";
  
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}


/****************************************************************************************
* Hints
****************************************************************************************/
/* 
    Hint 1: Everything
    Like the && operator, the every method can stop evaluating further elements
    as soon as it has found one that doesn’t match.
    So the loop-based version can jump out of the loop—with break or
    return—as soon as it runs into an element for which the predicate function returns false.
    If the loop runs to its end without finding such an element,
    we know that all elements matched and we should return true.
    To build every on top of some, we can apply De Morgan’s laws,
    which state that a && b equals !(!a || !b).
    This can be generalized to arrays,
    where all elements in the array match if there is no element in the array that does not match.

    Hint 2: Dominant writing direction
    Your solution might look a lot like the first half of the textScripts example.
    You again have to count characters by a criterion based on characterScript
    and then filter out the part of the result that refers to uninteresting (script-less) characters.
    Finding the direction with the highest character count can be done with reduce.
    If it’s not clear how, refer to the example earlier in the chapter,
    where reduce was used to find the script with the most characters.
*/