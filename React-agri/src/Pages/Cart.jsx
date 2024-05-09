import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // import Link from react-router-dom
import './Cart.css';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 100, image: 'https://via.placeholder.com/100', quantity: 1 },
    { id: 2, name: 'Item 2', price: 200, image: 'https://via.placeholder.com/100', quantity: 1 },
    { id: 3, name: 'Item 3', price: 300, image: 'https://via.placeholder.com/100', quantity: 1 },
  ]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setItems(items.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (id) => {
    setItems(items.map((item) => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-details">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <h2>{item.name}</h2>
          </div>
          <div className="quantity-controls">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <input type="text" readOnly value={item.quantity} />
            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>
          <p>${item.price * item.quantity}</p>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <div className="total-price">Total: Rs:{totalPrice}</div>
     <div className="checkout-button-container">
      <Link to="/payment" className="checkout-button">Proceed to Checkout</Link>
    </div>
    </div>
  );
};

export default Cart;