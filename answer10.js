// Define the array of numbers
let numbers = [12, 45, 7, 23, 56, 89, 34, 11, 67, 92];

// Initialize the largest number variable to the first element of the array
let largest = numbers[0];

// Use a for loop to iterate over the array
for (let i = 1; i < numbers.length; i++) {
  // Check if the current number is larger than the largest number so far
  if (numbers[i] > largest) {
    // Update the largest number variable
    largest = numbers[i];
  }
}

// Print the result
console.log(`The largest number in the array is: ${largest}`);
