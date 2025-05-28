const cart = document.getElementById('cart');

const addButtons = document.querySelectorAll('button[data-item]');

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

removeButton.addEventListener("click", () => {
  const selected = Array.from(cart.SelectedOptions);  

  selected.forEach(option => {
    cart.removeChild(option);
  });
});

