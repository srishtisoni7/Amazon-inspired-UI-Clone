unction addToCart(name, price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let product = {
name: name,
price: price
};

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

alert("Product added to cart");

}