

var div = document.createElement("div")
div.textContent = " wrote the Javascript"
header.appendChild(div)

// Make the span a different color than the rest of the text

var span = document.createElement('span');
span.textContent = 'LeSean';
span.style.color = "gold" 
// Insert the <span> before the text
div.insertBefore(span, div.firstChild); 
header.appendChild(div);


var h1 = document.createElement("h1")
h1.textContent = "Javascript made this!!"
div.prepend(h1)

// changing messages on the left 
var messageLeft = document.getElementsByClassName("message left");
messageLeft[0].textContent = "What did the duck say when shopping for chapstick?"
messageLeft[1].textContent = "YES!! Put it on my bill!"

// change messages on the right 
var messageRight = document.getElementsByClassName("message right")
messageRight[0].textContent = "I dont know, is this a dad joke?"
messageRight[1].textContent = "LOL, get a real job please!!"

// clearing messages
var clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function(){
    while (messageLeft.length > 0){
        messageLeft[0].parentNode.removeChild(messageLeft[0])
    };
    while(messageRight.length > 0){
        messageRight[0].parentNode.removeChild(messageRight[0])
    };
})


const themeDropDown = document.getElementById('theme-drop-down');
const messages = document.querySelectorAll('.message');

themeDropDown.addEventListener('change', () => {
    const selectedValue = themeDropDown.value;
    applyTheme(selectedValue);
});

function applyTheme(theme) {
    console.log(theme)
    if (theme === 'theme-one') {
        messages.forEach(messageLeft => {
            messageLeft.style.backgroundColor = 'blue';
            messageLeft.style.color = 'brown';
        });
    } else if (theme === 'theme-two') {
        messages.forEach((messageLeft,messageRight )=> {
            messageLeft.style.backgroundColor = 'red';
            messageLeft.style.color = 'black';
            messageRight.style.backgroundColor = 'black';
            messageRight.style.color = 'white';
            
        // });
        // messages.forEach(messageRight => {
        // messageRight.style.backgroundColor = 'black';
        // messageRight.style.color = 'white';

    });
    }
}









