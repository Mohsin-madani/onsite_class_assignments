// Function to calculate average of two numbers
function calculateAverage(num1: number, num2: number): number {
    return (num1 + num2) / 2;
}

const number1: number = 10;
const number2: number = 20;

const average: number = calculateAverage(number1, number2);
console.log(`Average of ${number1} and ${number2} is: ${average}`);