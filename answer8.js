// Function to calculate the sum of all numbers in an array
function calculateSum(array) {
  let sum = 0; // Initialize sum to 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]; // Add each element in the array to sum
  }
  return sum; // Return the total sum
}

// Example array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Calculate the sum of all numbers in the array
const sum = calculateSum(numbers);

// Print the sum
console.log("Sum of all numbers in the array:", sum);
