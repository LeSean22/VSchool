// Write a function that takes a string as a parameter and
//  returns the same string in all capital letters followed by all lowercase letters.
  // This function first converts the input string to uppercase using toUpperCase(), 
  //then converts it to lowercase using toLowerCase(), and finally concatenates the two parts to create the desired result.

function capitalizeAndLowercase(inputString) {
    let upperCasePart = inputString.toUpperCase();
    let lowerCasePart = inputString.toLowerCase();
    return upperCasePart + lowerCasePart;
  }
  

  const input1 = "HelLoWorld";
  const result1 = capitalizeAndLowercase(input1);
  console.log(result1);

 
//   Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
//   Math.floor is a JavaScript function that is used to round a number down to the nearest integer that is less than or equal to the original number. 
//   It is part of the Math object in JavaScript, which provides various mathematical operations and functions. 
 
  function halfStringLength(inputString) {
    let length = inputString.length;
    let halfLength = Math.floor(length / 2);
    return halfLength;
  }
   

  const input2 = "HelloWorld";
  const result2 = halfStringLength(input2);
  console.log(result2);

//   Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
//   Hint: If your string length is odd, use Math.floor() to round down.

function getFirstHalf(inputString) {
    // Calculate the length of the input string
    // Calculate the end index for the first half (rounding down)
     // Use slice to extract the first half of the string
    let strLength = inputString.length;
    let endIndex = Math.floor(strLength / 2);
    let firstHalf = inputString.slice(0, endIndex);
  
    return firstHalf;
  }
  
  let inputString = "Hello, VSchool!";
  let result = getFirstHalf(inputString); 
  console.log(result);
  


  function capitalizeAfterSpace(inputString3) {
    // Split the input string into an array of words
    // Iterate through the words and capitalize the first character of each
    // Join the words back into a single string
    let words = inputString3.split(' ');
  

    for (let i = 0; i < words.length; i++) {
      if (words[i].length > 0) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
      }
    }
  
    let capitalizedString = words.join(' ');
    return capitalizedString;
  }
  
  let inputString3 = "hello VSchool example";
  let result3 = capitalizeAfterSpace(inputString3);
  console.log(result3);
  
  
  
  
  
