var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetable array.
var removeLastVegetable = vegetables.pop("lettuce");
    console.log("vegetables :",vegetables );

// 2. Remove the first item from the fruit array.
var removeFirstFruit = fruit.shift("banana");
    console.log("fruit:", fruit);


// 3. Find the index of "orange."
var whereIsOrange = fruit.indexOf("orange");
    console.log("Index of 'orange':", whereIsOrange);


// 4. Add that number to the end of the fruit array.
var indexOfOrange = fruit.indexOf("orange");
    fruit.push(indexOfOrange);
    console.log(fruit);

// 5. Use the length property to find the length of the vegetable array.
var lengthOfVeggies = vegetables.length 
    console.log(lengthOfVeggies)


// 6. Add that number to the end of the vegetable array.
 vegetables.push(3)
    console.log(vegetables)


// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables)
    console.log(food)

// 8. Remove 2 elements from your new array starting at index 4 with one method.
var foodCut = food.splice(4,2)
    console.log(foodCut)
// 9. Reverse your array.
food.reverse(['apple', 'orange', 'watermelon', 1, 3 ])
console.log(food)


// 10. Turn the array into a string and return it.
var joinedFood = food.join(",")
    console.log(joinedFood)

