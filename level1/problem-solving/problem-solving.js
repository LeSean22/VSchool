function findLargestNumber(numbers) {
    if (numbers.length === 0) {
        // Return an appropriate value when the input array is empty
        return undefined; // You can also return null or any other value you prefer
    }

    let largest = numbers[0]; // Initialize the largest number with the first element

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i]; // Update largest if a larger number is found
        }
    }

    return largest;
}

// Example usage:
const numbers = [12, 5, 8, 17, 3, 21];
const largestNumber = findLargestNumber(numbers);
console.log("The largest number is:", largestNumber);


function wordsWithCharacter(words, character) {
    // Filter the array to include only words that have the character
    const filteredWords = words.filter(word => word.includes(character));
    return filteredWords;
}

// Example usage:
const wordArray = ["apple", "banana", "cherry", "date"];
const characterToFind = "a";
const result1 = wordsWithCharacter(wordArray, characterToFind);
console.log("Words with the character:", result);


function isDivisible(num1, num2) {
    if (num2 === 0) {
        // Avoid division by zero
        return false;
    }

    return num1 % num2 === 0;
}

// Example usage:
const num1 = 12;
const num2 = 4;
const result = isDivisible(num1, num2);
console.log(`${num1} is divisible by ${num2}: ${result}`);
