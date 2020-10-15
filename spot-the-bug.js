// cerner_2^5_2020

let numberToTest;

const isOdd = test => inputNumber % 2 === 1;

numberToTest = 21; // Let's test for 21

if (isOdd) {
    console.log(`${numberToTest} is a odd number`); // This will print 21 is a odd number
}

numberToTest = 10; // Let's test for 10

if (isOdd) {
    console.log(`${numberToTest} is a odd number`); // Even this will print on the console - can you spot the bug?
}
