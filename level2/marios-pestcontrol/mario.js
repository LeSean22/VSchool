const goombaInput = document.getElementById("goombaInput");
const bobombInput = document.getElementById("bobombInput");
const cheepchompInput = document.getElementById("cheepchompInput");
const totalPrice = document.getElementById("totalPrice");

function calculateTotalPrice() {
    const goombaTotal = goombaInput.valueAsNumber * 5;
    const bobombTotal = bobombInput.valueAsNumber * 7;
    const cheepchompTotal = cheepchompInput.valueAsNumber * 11;
    const total = goombaTotal + bobombTotal + cheepchompTotal;
    totalPrice.textContent = `Total Price: ${total} Coins`;
}

const baddieInputs = document.querySelectorAll(".baddieInput");
baddieInputs.forEach(input => {
    input.addEventListener("input", calculateTotalPrice);
});

// Initial calculation
calculateTotalPrice();
