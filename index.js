var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cartItem = {};

  cartItem[item] = Math.round(Math.random() * 90 + Math.random() * 10);;
  cart.push(cartItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length == 0){
    console.log('Your shopping cart is empty.');
  }
  else{
    var ret = `In your cart, you have `;
    var i = 1;
   cart.forEach(function(obj, index){
     for(var property in obj){
       ret = ret + `${property} at $${obj[property]}.` + i < cart.length?',':'';
console.log(ret + `${property} at $${obj[property]}.`);
     }
   });
   console.log(ret);


  }
}

function total() {
  // write your code here
  var price = 0;
  for (var variable in object) {

  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
addToCart("banana");
addToCart("lemon");
viewCart();
