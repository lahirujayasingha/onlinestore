document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value;
    if (query) {
        // Redirect to search results page (modify as needed)
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    } else {
        alert('Please enter a search query');
    }
});
// Initialize cart array
let cart = [];

// Function to add item to the cart
function addToCart(name, price) {
    // Check if item is already in the cart
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear current cart items
    cartItems.innerHTML = '';

    // Initialize total cost
    let total = 0;

    // Display each item in the cart
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    // Update total cost
    cartTotal.textContent = total.toFixed(2);
}

// Event listener for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = parseFloat(this.getAttribute('data-price'));
        addToCart(name, price);
    });
});
