
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const burgerQuantity = parseInt(document.getElementById('burgerQuantity').value);
    const pizzaQuantity = parseInt(document.getElementById('pizzaQuantity').value);
    const pancakesQuantity = parseInt(document.getElementById('pancakesQuantity').value);
    const omeletteQuantity = parseInt(document.getElementById('omeletteQuantity').value);
    const frenchToastQuantity = parseInt(document.getElementById('frenchToastQuantity').value);
    const steakQuantity = parseInt(document.getElementById('steakQuantity').value);
    const pastaQuantity = parseInt(document.getElementById('pastaQuantity').value);
    const saladQuantity = parseInt(document.getElementById('saladQuantity').value);
    const sandwichQuantity = parseInt(document.getElementById('sandwichQuantity').value);
  
    if (burgerQuantity < 0 || burgerQuantity > 10 || 
        pizzaQuantity < 0 || pizzaQuantity > 10 ||
        pancakesQuantity < 0 || pancakesQuantity > 10 ||
        omeletteQuantity < 0 || omeletteQuantity > 10 ||
        frenchToastQuantity < 0 || frenchToastQuantity > 10 ||
        steakQuantity < 0 || steakQuantity > 10 ||
        pastaQuantity < 0 || pastaQuantity > 10 ||
        saladQuantity < 0 || saladQuantity > 10 ||
        sandwichQuantity < 0 || sandwichQuantity > 10) {
      document.getElementById('errorMessage').innerText = 'Please enter a quantity between 0 and 10.';
      return;
    }

    document.getElementById('errorMessage').innerText = '';

    const totalPrice = (burgerQuantity * 5) + (pizzaQuantity * 8) +
                       (pancakesQuantity * 6) + (omeletteQuantity * 7) +
                       (frenchToastQuantity * 4) + (steakQuantity * 12) +
                       (pastaQuantity * 9) + (saladQuantity * 7) +
                       (sandwichQuantity * 6); // Example prices
  
    alert(`Your order: ${burgerQuantity} Burger(s), ${pizzaQuantity} Pizza(s), ${pancakesQuantity} Pancake(s), ${omeletteQuantity} Omelette(s), ${frenchToastQuantity} French Toast(s), ${steakQuantity} Steak(s), ${pastaQuantity} Pasta(s), ${saladQuantity} Salad(s), ${sandwichQuantity} Sandwich(s). Total: $${totalPrice}`);
  });
  