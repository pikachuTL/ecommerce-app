import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty</p> : cart.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;