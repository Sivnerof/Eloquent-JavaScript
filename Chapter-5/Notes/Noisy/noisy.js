function myNoisy(f){
    return (...args) => {
        console.log(`Calling with... ${args}`);
        const result = f(...args);
        console.log(`Smallest of ${args} was ${result}`);
        return result;
    }
}

function noisyEJS(f) {
    return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
    };
}

noisyEJS(Math.min)([1,5,32]); // Throws error
myNoisy(Math.min)(1,5,32);