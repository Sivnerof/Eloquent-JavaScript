/***********************************************************
* Immediately Invoked Function Expression Examples
***********************************************************/

let $ = console.log;
let _ = 'Hello World';

(() => $(`${_}`))();
((_) => $(_))(_);


const newBalance = (function balance(){
    let i = 0;
    return {
        getVal : () =>  i,
        setVal : val =>  i = val,
        incVal : amount => i += amount
    }
})();

console.log(newBalance);
console.log(newBalance.getVal());
console.log(newBalance.setVal(5));
console.log(newBalance.incVal(5));
console.log(newBalance.getVal());