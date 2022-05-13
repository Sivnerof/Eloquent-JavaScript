/*
    * Problem 1: Minimum
    * The previous chapter introduced the standard function Math.min that returns
    * its smallest argument. We can build something like that now. 
    * Write a function min that takes two arguments and returns their minimum.
*/

// My Solution 1:
function min(x, y){
    return x < y ? x : y;
}

// Elegant JS Solution 1:
function min(a, b) {
    if (a < b) return a;
    else return b;
}

/*
    * Problem 2: Recursion
    * We’ve seen that % (the remainder operator) can be used to test whether a
    * number is even or odd by using % 2 to see whether it’s divisible by two. 
    * Here’s another way to define whether a positive whole number is even or odd:
    *   • Zero is even.
    *   • One is odd.
    *   • For any other number N, its evenness is the same as N - 2.
    * Define a recursive function isEven corresponding to this description. The
    * function should accept a single parameter (a positive, whole number) and return a Boolean.
    * Test it on 50 and 75. 
    * See how it behaves on -1. 
    * Why? Can you think of a way to fix this?
*/

// My Solution 2a:
function isEvenA(num){
    if (num === 0) return true;
    else if (num === 1) return false;
    else return isEvenA(num - 2);
}
// console.log(isEven(-1)); RangeError: Maximum call stack size exceeded

// My Solution 2b:
// (Handles Negatives)
function isEvenB(num){
    if(num === 0) return true;
    else if (Math.abs(num) === 1) return false;
    else return isEvenB(Math.abs(num - 2));
}

// Elegant JS Solution 2:
function isEvenEJS(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEvenEJS(-n);
    else return isEvenEJS(n - 2);
}


/*
    * Problem 3: Bean counting
    * You can get the Nth character, or letter, from a string by writing "string"[N].
    * The returned value will be a string containing only one character. 
    * (for example, "b"). 
    * The first character has position 0, which causes the last one to be found at
    * position string.length - 1. 
    * In other words, a two-character string has length 2, 
    * and its characters have positions 0 and 1.
    * Write a function countBs that takes a string as its only argument and returns
    * a number that indicates how many uppercase “B” characters there are in the string.
    * Next, write a function called countChar that behaves like countBs, except
    * it takes a second argument that indicates the character that is to be counted
    * (rather than counting only uppercase “B” characters). 
    * Rewrite countBs to make use of this new function.
*/

// My Solution 3:
function countBs(str){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === 'B') count++;
    }
    return count;
}

function countChar(str, char){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === char) count++;
    }
    return count;
}

function countBsRewritten(str){
    return countChar(str, 'B');
}

// Elegant JS Solution 3:
function countCharEJS(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
}
  
function countBsEJS(string) {
    return countCharEJS(string, "B");
}