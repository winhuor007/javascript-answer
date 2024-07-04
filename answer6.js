// Define the list of numbers from 1 to 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Initialize counters for odd and even numbers
let oddCount = 0;
let evenCount = 0;

// Loop through the list of numbers
numbers.forEach((number) => {
  if (number % 2 === 0) {
    // If the number is even, increment the even counter
    evenCount++;
  } else {
    // If the number is odd, increment the odd counter
    oddCount++;
  }
});

// Output the results
console.log("Count of odd numbers:", oddCount);
console.log("Count of even numbers:", evenCount);
