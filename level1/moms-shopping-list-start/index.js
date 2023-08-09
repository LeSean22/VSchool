// Get references to elements
const addItemForm = document.getElementById('add-todo');
const addItemButton = document.getElementById('addItemButton');
const list = document.getElementById('list');

// Add event listener for form submission
addItemForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the input value
    const itemTitle = document.getElementById('title').value;

    // Create a new list item
    const newItem = document.createElement('li');
    newItem.innerHTML = `
        <div>${itemTitle}</div>
        <button>Edit</button>
        <button class='delete'>X</button>
    `;

    // Append the new item to the list
    list.appendChild(newItem);

    // Clear the input field
    document.getElementById('title').value = '';

    // Remove the corresponding list item
    const deleteButton = newItem.querySelector('.delete');
    deleteButton.addEventListener('click', function () {
        list.removeChild(newItem); 
    });

})
