function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getDetails = function() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    };
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

console.log(book2.getDetails());

function removeDuplicates(arr) {
    const uniqueArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    
    return uniqueArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates([5, 5, 5, 5, 5]));    // Output: [5]