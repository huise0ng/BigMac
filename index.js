document.addEventListener('DOMContentLoaded', () => {
    const burgerStack = document.getElementById('burger-stack');

    // Function to add ingredient to the stack
    function addIngredient(ingredientNumber) {
        const img = document.createElement('img');
        img.src = `image${ingredientNumber}.png`; 
        img.alt = `Ingredient ${ingredientNumber}`; 
        burgerStack.appendChild(img);
    }

    // Event listeners for buttons
    document.getElementById('sesame-bun-top').addEventListener('click', () => addIngredient(1));
    document.getElementById('patty').addEventListener('click', () => addIngredient(2));
    document.getElementById('special-sauce').addEventListener('click', () => addIngredient(3));
    document.getElementById('lettuce').addEventListener('click', () => addIngredient(4));
    document.getElementById('cheese').addEventListener('click', () => addIngredient(5));
    document.getElementById('pickle').addEventListener('click', () => addIngredient(6));
    document.getElementById('onion').addEventListener('click', () => addIngredient(7));
    document.getElementById('sesame-bun-bottom').addEventListener('click', () => addIngredient(8));
});
