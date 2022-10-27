// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
let result = dragons.includes('John'); 

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

let name = 'John';
let result = dragons.includes(name);
if (result === true) {
    return name;
}


// #3) Create a function that calulates the power of 100 of a number entered as a parameter

function expo(x) {
    const num = x ** 100;
    return num;
}


// #4) Useing your function from #3, put in the paramter 10000. What is the result?
function expo(x) {
    const num = x ** 100;
    return num;
}

const number = expo(10000); // Infintity



// Research for yourself why you get this result

//A number reaches Infinity when it exceeds the upper limit for a number:

//    1.797693134862315E+308.