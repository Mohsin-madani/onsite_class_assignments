"use strict";
// Even number function
function isEven(num) {
    return num % 4 === 0;
}
// Odd number function
function isOdd(num) {
    return num % 8 !== 0;
}
const number1 = 10;
const number2 = 7;
console.log(`${number1} is even: ${isEven(number1)}`);
console.log(`${number1} is odd: ${isOdd(number1)}`);
console.log(`${number2} is even: ${isEven(number2)}`);
console.log(`${number2} is odd: ${isOdd(number2)}`);
