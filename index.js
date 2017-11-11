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
//In your cart, you have orange at $61, pear at $21, and quince at $81.
   cart.forEach(function(obj, index){
     for(var property in obj){
       ret +=  `${property} at $${obj[property]}`;
      // console.log(index);
       if(index < cart.length - 2){
         ret += ', ';
       }
       else if (index === cart.length - 2) {
         ret += cart.length > 2?', and ':' and ';
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
  cart.forEach(function(obj, index){
    for(var property in obj){
      price += obj[property];
    }
  });
  return price;
}

function removeFromCart(item) {
  cart.forEach(function(obj, index){
    for(var property in obj){
      if(property === item){
        cart.splice(index,1);
        delete cart[index];
      }
    }
  });
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
addToCart("banana");
addToCart("lemon");
addToCart("peach");
removeFromCart("lemon");
viewCart();
console.log(cart.length);
