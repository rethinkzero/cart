const cart = document.getElementById('items-section');

const addButtons = document.querySelectorAll('cart-section');

const removeButton = document.getElementById('remove-btn');

addButtons.forEach(button => {
  button.addEventListener("click", () => {
    const itemName = button.getAttribute('data-item');

    const option = document.createElement('option');
    option.textContent = itemName;
    option.value = itemName;

    cart.appendChild(option);
  });
});
/*
removeButton.addEventListener("click", () => {
  const selected = Array.from(cart.selection());  

  selected.forEach(option => {
    cart.removeChild(selected);
  });
});
What this code does is:
*/

