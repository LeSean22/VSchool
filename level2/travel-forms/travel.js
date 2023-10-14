const form = document.travel

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    // Radio Inputs
    console.log(form.gender.value)
    
    
    // Checkbox Inputs
    console.log(form.diet.checked)
    
    const checkedInputs = []
    
    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            checkedInputs.push(form.diet[i].checked)
        }
    }
    
    console.log(checkedInputs)
    
    
    // Select Option inputs
    
    console.log(form.city.value)
    
    
})