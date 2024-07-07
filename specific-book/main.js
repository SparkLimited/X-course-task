document.addEventListener('DOMContentLoaded', function () {
    const pricePerBook = 17; // ціна за книгу
    const quantityInput = document.getElementById('quantity');
    const totalPriceElement = document.getElementById('total-price');
    const increaseButton = document.getElementById('increase');
    const decreaseButton = document.getElementById('decrease');

    // Функція для оновлення загальної вартості
    function updateTotalPrice() {
        const quantity = parseInt(quantityInput.value, 10);
        const totalPrice = pricePerBook * quantity;
        totalPriceElement.textContent = totalPrice;
    }

    // Обробник для збільшення кількості
    increaseButton.addEventListener('click', function () {
        let quantity = parseInt(quantityInput.value, 10);
        if (quantity < 42) {
            quantity += 1;
            quantityInput.value = quantity;
            updateTotalPrice();
        }
    });

    // Обробник для зменшення кількості
    decreaseButton.addEventListener('click', function () {
        let quantity = parseInt(quantityInput.value, 10);
        if (quantity > 1) {
            quantity -= 1;
            quantityInput.value = quantity;
            updateTotalPrice();
        }
    });

    // Обробник для введення з клавіатури
    quantityInput.addEventListener('input', function () {
        let quantity = parseInt(quantityInput.value, 10);
        if (isNaN(quantity) || quantity < 1) {
            quantityInput.value = 1;
        } else if (quantity > 42) {
            quantityInput.value = 42;
        }
        updateTotalPrice();
    });
});
