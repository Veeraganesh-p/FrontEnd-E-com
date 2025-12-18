import { useEffect, useState } from "react";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);


  const updateCart = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const handleIncrease = (id) => {
    const updated = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  const handleDecrease = (id) => {
    const updated = cartItems
      .map((item) =>
        item._id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
      .filter((item) => item.quantity > 0); 
    updateCart(updated);
  };

  const handleRemove = (id) => {
    const updated = cartItems.filter((item) => item._id !== id);
    updateCart(updated);
  };

  const handleProceedToBuy = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    alert(`Proceeding to buy items worth ₹${total}`);
  };

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1>Cart</h1>
        <p>Your cart is empty!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item._id} className="cart-item">
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-img"
              />
            )}

            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>

              <div className="cart-quantity">
                <button onClick={() => handleDecrease(item._id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item._id)}>+</button>
              </div>

              <p className="cart-subtotal">
                Subtotal: ₹{item.price * item.quantity}
              </p>

              <button
                className="cart-remove"
                onClick={() => handleRemove(item._id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ₹{totalCost}</h2>
        <button className="cart-buy-btn" onClick={handleProceedToBuy}>
          Proceed to Buy
        </button>
      </div>
    </div>
  );
}

export default Cart;
