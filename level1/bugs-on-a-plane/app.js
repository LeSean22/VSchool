function formAlert(){
    var form = document.getElementById("airline-form");
    var submit = document.getElementById("submit");
    var query = document.querySelector;
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = {};
    var veganCheckbox = document.getElementById("vegan");
    var diet = []; 

    if (document.getElementById('vegan').checked) {
        diet.push(document.getElementById('vegan').value);
    }
    if (document.getElementById('gluten').checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (document.getElementById('paleo').checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);