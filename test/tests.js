// IMPORT MODULES under test here:

import { add, subtract, multiply, divide } from '../calculations.js';

const test = QUnit.test;


 
// name your test by what it is testing
test('add two numbers', (expect) => {
    // 1.Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 4;
    const expected = 8;
    
    
    // 2.Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    // 3.Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
 
test('add two numbers', (expect) => {
    // 1.Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 3;
    const expected = 7;
    
    
    // 2.Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    // 3.Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract two numbers', (expect) => {
    // 1.Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 3;
    const expected = 1;
    
    
    // 2.Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(x, y); // use your function here

    // 3.Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('multiply two numbers', (expect) => {
    const x = 3;
    const x = 3;
    const expected = 9;
    
    const actual = multiply(x, y);

    expect.equal(actual, expected);
});


test('divide two numbers', (expect) => {
    const x = 12;
    const y = 3;
    const expected = 4;

    const actual = divide(x, y);

    expect.equal(actual, expected);
});