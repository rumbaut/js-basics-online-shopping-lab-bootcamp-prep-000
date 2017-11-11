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

   cart.forEach(function(obj, index){
     for(var property in obj){
       ret +=  `${property} at $${obj[property]}`;
      // console.log(index);
       if(index < cart.length - 1){
         ret += ', ';
       }
       else if (index === cart.length - 1) {
         ret += ' and ';
       }
       else{
         ret +='.'
       }
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
addToCart("peach");
viewCart();
