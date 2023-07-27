const colorBox = document.getElementById("color-box") // Bring html element color-box into js and save as colorBox variable


colorBox.addEventListener('mouseover', function changeBlue(){
    console.log("You mouse over me!");
    colorBox.style.backgroundColor = "blue"
    
})

colorBox.addEventListener('mousedown', function changeREd(){
    console.log("Your mouse is down!");
    colorBox.style.backgroundColor = "red"
})

colorBox.addEventListener('mouseup', function changeYellow(){
    console.log("Your mouse is up!");
    colorBox.style.backgroundColor = "yellow"
})

colorBox.addEventListener('dblclick', function changeGreen(){
    console.log("You double clicked me!");
    colorBox.style.backgroundColor = "green"
})

document.addEventListener('wheel', function changeOrange(){
    console.log("You are using the wheeling!");
    colorBox.style.backgroundColor = "orange"

})
// keydown events
document.addEventListener('keydown', function (e){
    console.log("You pressed me!");
    console.log("e.key: ", e.key)
    if (e.key === "b"){
        colorBox.style.backgroundColor = "blue"
    } else if ( e.key === "g"){
        colorBox.style.backgroundColor = "green"
    }
    else if ( e.key === "y"){
        colorBox.style.backgroundColor = "yellow"
    }
    else if ( e.key === "r"){
        colorBox.style.backgroundColor = "red"
    }
    else if ( e.key === "p"){
        colorBox.style.backgroundColor = "purple"
    }
    else if ( e.key === "o"){
        colorBox.style.backgroundColor = "orange"
    } 

})