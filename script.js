
const bar=document.getElementById("bar");
const nav=document.getElementById("navbar");
const close=document.getElementById("close");

if(bar){
    bar.addEventListener("click", ()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener("click", ()=>{
        nav.classList.remove('active');
    })
}



const quantityInputs = document.querySelectorAll("#cart input[type='number']");
  const cartSubtotal = document.querySelector("#Subtotal table tr:first-child td:last-child");
  const shippingCost = 0; // Assuming shipping is free
  const cartTotal = document.querySelector("#Subtotal table tr:last-child td:last-child");
  const checkoutButton = document.querySelector(".normal");

  // Function to update cart subtotal, total, and orders placed
  function updateCartValues() {
    let subtotal = 0;
    let totalQuantity = 0;

    // Calculate the new subtotal and total quantity
    quantityInputs.forEach((input) => {
      const price = parseFloat(input.parentElement.nextElementSibling.textContent.replace("$", ""));
      const quantity = parseInt(input.value);
      subtotal += price * quantity;
      totalQuantity += quantity;
    });

    // Update the cart subtotal, total, and orders placed
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTotal.textContent = `$${(subtotal + shippingCost).toFixed(2)}`;
    checkoutButton.textContent = `Proceed to Checkout (${totalQuantity} ${totalQuantity === 1 ? "order" : "orders"})`;
  }

  // Event listener for quantity input changes
  quantityInputs.forEach((input) => {
    input.addEventListener("input", updateCartValues);
  });

  // Initially update the cart subtotal, total, and orders placed
  updateCartValues();
