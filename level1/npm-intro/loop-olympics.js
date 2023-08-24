// For loop 0 through 9 (Preliminaries) 
for (let number = 0; number < 10; number++) {
    console.log(number);
}

// For loop 9 through 0
for (let number = 9; number >= 0; number--) {
    console.log(number);
}

// for loop containing fruits 
const fruit = ["banana", "orange", "apple", "kiwi"];
    for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}
//  for loops (bronze medal)
const numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(i);

}
console.log(numbers);

// for loop console.log even numbers only 0 through 100
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}
// for loop console.log every other fruit
const thisFruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
const everyOtherFruit = [];

for (let i = 0; i < thisFruit.length; i += 2) {
    everyOtherFruit.push(thisFruit[i]);
}

console.log(everyOtherFruit);

//  for loop (silver medal)
const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
];
for (let i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name);
}
