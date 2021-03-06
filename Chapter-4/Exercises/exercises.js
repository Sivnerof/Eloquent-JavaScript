/*
    Problem 1: The sum of a range
    
    The introduction of this book alluded to the following as a nice way to compute
    the sum of a range of numbers:
        console.log(sum(range(1, 10)));

    Write a range function that takes two arguments, start and end, and returns
    an array containing all the numbers from start up to (and including) end.
    Next, write a sum function that takes an array of numbers and returns the
    sum of these numbers.
    Run the example program and see whether it does indeed return 55.
    
    As a bonus assignment, modify your range function to take an optional third
    argument that indicates the “step” value used when building the array.
    If no step is given, the elements go up by increments of one,
    corresponding to the old behavior.
    The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
    Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

// My Solution 1:
function range(start, end, step = start < end ? 1 : -1){
    let rangeList = [];
    if (step > 0){
        for (; start <= end; start += step) rangeList.push(start);
    } else {
        for (; start >= end; start += step) rangeList.push(start);
    }
    return rangeList;
}

function sum(arr){
    let arrSum = 0;
    for (let item of arr){
        arrSum += item;
    }
    return arrSum;
}

// EJS Solution 1:
function rangeEJS(start, end, step = start < end ? 1 : -1) {
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step) array.push(i);
    } else {
      for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}
  
function sumEJS(array) {
    let total = 0;
    for (let value of array) {
      total += value;
    }
    return total;
}


/*
    Problem 2: Reversing an array

    Arrays have a reverse method that changes the array by inverting the order in
    which its elements appear.
    For this exercise, write two functions, reverseArray and reverseArrayInPlace.
    The first, reverseArray, takes an array as argument
    and produces a new array that has the same elements in the inverse order.
    The second, reverseArrayInPlace, does what the reverse method does:
    it modifies the array given as argument by reversing its elements.
    Neither may use the standard reverse method.

    Thinking back to the notes about side effects and pure functions in the
    previous chapter, which variant do you expect to be useful in more situations?
    Which one runs faster?
*/

// My Solution 2:
function reverseArray(arr){
    let array = [];
    for (let i = 0; i < arr.length; i++){
        array.unshift(arr[i]);
    }
    return array;
}

function reverseArrayInPlace(arr){
    const end = Math.floor(arr.length / 2);
    const len = arr.length - 1;
    for (let i = 0; i < end; i++){
        [arr[i], arr[len - i]] = [arr[len - i], arr[i]]; 
    }
    return arr;
}

// EJS Solution 2:
function reverseArrayEJS(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
}
  
function reverseArrayInPlaceEJS(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
}


/*
    Problem 3: A list
    Objects, as generic blobs of values,
    can be used to build all sorts of data structures.
    A common data structure is the list (not to be confused with array).
    A list is a nested set of objects,
    with the first object holding a reference to the second,
    the second to the third, and so on.

    let list = {
        value: 1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: null
            }
        }
    };

    A nice thing about lists is that they can share parts of their structure.
    For example, if I create two new values {value: 0, rest: list}
    and {value: -1, rest: list} (with list referring to the binding defined earlier),
    they are both independent lists,
    but they share the structure that makes up their last three elements.
    The original list is also still a valid three-element list.
    
    Write a function arrayToList that builds up a list structure like the one
    shown when given [1, 2, 3] as argument.
    Also write a listToArray function that produces an array from a list.
    Then add a helper function prepend,
    which takes an element and a list and creates a new list that adds the element to the
    front of the input list, and nth, which takes a list and a number and returns
    the element at the given position in the list
    (with zero referring to the first element) or undefined when there is no such element.

    If you haven’t already, also write a recursive version of nth.
*/

// My Solution 3:
function arrayToList(arr){
    let list = {};
    for (let i = arr.length - 1; i >= 0; i--){
        let node = {};
        node.value = arr[i];
        if (Object.keys(list).length === 0) node.rest = null;
        else node.rest = list;
        list = node;
    }
    return list;
}

function listToArray(list){
    let array = [];
    for (let node = list; node; node = node.rest) array.push(node.value);
    return array;
}

function prepend(elem, list){
    const prependedObj = {};
    prependedObj.value = elem;
    prependedObj.rest = list;
    return prependedObj;
}

function nth(list, number){
    let position = 0;
    for (let node = list; node; node = node.rest) {
        if (position === number) return node;
        else if (position > number) return undefined;
        position++;
    }
}

function nthRecursive(list, number){
    if (list === null) return undefined;
    else if (number === 0) return list;
    else return nthRecursive(list.rest, number - 1);
}

// EJS Solution 3:
function arrayToListEJS(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
}
  
function listToArrayEJS(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
}
  
function prependEJS(value, list) {
    return {value, rest: list};
}
  
function nthEJS(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

/*
    Problem 4: Deep comparison

    The == operator compares objects by identity.
    But sometimes you’d prefer to compare the values of their actual properties.

    Write a function deepEqual that takes two values and returns true only if they
    are the same value or are objects with the same properties,
    where the values of the properties are equal when compared with a recursive call to deepEqual.

    To find out whether values should be compared directly (use the === operator for that)
    or have their properties compared, you can use the typeof operator.
    If it produces "object" for both values, you should do a deep comparison.
    But you have to take one silly exception into account: because of a historical
    accident, typeof null also produces "object".
    The Object.keys function will be useful when you need to go over the properties of objects to compare them.
*/

// My Solution 4:
function deepEqual(value1, value2){
    if (typeof value1 == "object" && value1 != null && typeof value2 == "object" && value2 != null){
        const key1 = Object.keys(value1);
        const key2 = Object.keys(value2);
        if (key1.length !== key2.length) return false;
        else {
            for (let i = 0; i < key1.length; i++){
                if (key1[i] !== key2[i]) return false;
            }
            for (let i = 0; i < key1.length; i++){
                const test = deepEqual(value1[key1[i]], value2[key2[i]]);
                if (test === false) return test;
            }
            return true;
        }
    } else return value1 === value2 ? true : false;
}

// EJS Solution 4:
function deepEqualEJS(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
}

/**************************************************
 * Tests For Deep Copy
**************************************************/

// Create Array Of Test Objects
function arrayOfTests(){
    // Same index different values, non nested. (false)
    const obj1 = {1:"hello", 2:"world"};
    const obj2 = {1:"good", 2:"morning"};

    // Same values different index. (false)
    const obj3 = {greetingA:"Welcome", greetingB:"Greetings"};
    const obj4 = {1:"Welcome", 2:"Greetings"};

    // Same Index Same Values, non nested. (true)
    const obj5 = {3:"good", 2:"morning"};
    const obj6 = {3:"good", 2:"morning"};

    // Same index different values, nested. (false)
    const obj7 = {1:"lorem", 2:"ipsum", 3: {4: "dolor", 5: "amet"}};
    const obj8 = {1:"lorem", 2:"ipsum", 3: {4: "amet", 5: "dolor"}};

    // Same values different index, nested. (false)
    const obj9 = {1:"lorem", 2:"ipsum", 3: {10: "amet", 8: "dolor"}};
    const obj10 = {1:"lorem", 2:"ipsum", 3: {9: "amet", 7: "dolor"}};

    // Same values same index, nested. (true)
    const obj11 = {1:"lorem", 2:"ipsum", 3: {9: "amet", 7: "dolor"}};
    const obj12 = {1:"lorem", 2:"ipsum", 3: {9: "amet", 7: "dolor"}};

    // Different key lengths, non nested. (false)
    const obj13 = {1:"lorem"};
    const obj14 = {1:"lorem", 2:"ipsum", 3: "amet"};

    // Different key lengths, nested. (false)
    const obj15 = {1:"lorem", 2:"ipsum", 3: {9: "amet", 7: "dolor", 6:"fidelis"}};
    const obj16 = {1:"lorem", 2:"ipsum", 3: {9: "amet", 7: "dolor"}};

    // One object null (false)
    const obj17 = {3:"good", 2:"morning"};
    const obj18 = null;

    // Same Index, Same Values, Triple Nested (true)
    const obj19 = {1:1, 2:2, 3:{4:4, 5:5, 6:{7:7, 8:8}}};
    const obj20 = {1:1, 2:2, 3:{4:4, 5:5, 6:{7:7, 8:8}}};

    // Same Index, Different Values, Tripple Nested (false)
    const obj21 = {1:1, 2:2, 3:{4:4, 5:5, 6:{7:7, 8:8}}}
    const obj22 = {1:1, 2:2, 3:{4:4, 5:5, 6:{7:8, 8:8}}};

    // Populate Array
    const testObjects = [];
    for (let i = 1; i <= 22; i++){
        testObjects.push(eval('obj' + i));
    }
    
    return testObjects;
}

// Loop through array of objects and send each pair to deepEqual
function callTestsOnDeepEqual(testArray){
    let results = [];
    for (let i = 0; i < testArray.length; i+=2){
        results.push(deepEqual(testArray[i], testArray[i + 1]));
    }
    return results;
}

// Compare boolean array with expected outcome
function compareResults(boolArray){
    const expect = [false, false, true, false, false, true, false, false, false];
    for (let i = 0; i < expect.length; i++){
        if (expect[i] !== boolArray[i]) return 'Tests Failed';
    }
    return 'Tests Passed';
}

console.log(compareResults(callTestsOnDeepEqual(arrayOfTests())));