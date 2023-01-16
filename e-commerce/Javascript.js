
// Create an array to store the products
let products = [
    {
      name: "PlayStation 5",
      description: "This is a sample product",
      price: "$10.00",
      image: "product1.jpg"
    },
    {
      name: "PlayStation 4",
      description: "This is a sample product",
      price: "$20.00",
      image: "product2.jpg"
    },
    {
      name: "Nintendo Switch",
      description: "This is a sample product",
      price: "$30.00",
      image: "product3.jpg"
    }
  ];
  
  // Create an empty array to store the items in the cart
  let cart = JSON.parse(localStorage.getItem('cart'));
  
  // Create a variable to store the total cost of the items in the cart
  let cartTotal = 0;
  
  // Get the "Add to Cart" buttons
  let addToCartButtons = document.getElementsByClassName("add-to-cart");
  console.log(addToCartButtons)
  // let addToCartButton = document.getElementsById("add-to-cart");

  // Add an event listener to each "Add to Cart" button
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function() {
      // Add the product to the cart
      cart.push(products[i]);
      localStorage.setItem('cart', JSON.stringify(cart))
      // Update the cart total
      cartTotal += parseFloat(products[i].price.slice(1));
      console.log(cart);
      console.log(`Cart total: ${cartTotal}`);
    });
  }

  console.log(cart);

  for (i = 0; i < cart.length; i++) {
    let li = document.createElement('li')
    li.className = 'cart-item'
    let name = document.createElement('p')
    name.appendChild(document.createTextNode(cart[i].name)) 
    li.appendChild(name)
    let description = document.createElement('p')
    description.appendChild(document.createTextNode(cart[i].description)) 
    li.appendChild(description)
    let price = document.createElement('p')
    price.appendChild(document.createTextNode(cart[i].price)) 
    li.appendChild(price)
    let image = document.createElement('p')
    image.innerHTML = `<img src='${cart[i].image}'>`
    li.appendChild(image)
    

    document.getElementById('cart').appendChild(li)
  }