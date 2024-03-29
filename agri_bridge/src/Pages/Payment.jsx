import React, { useState } from 'react';
import './Payment.css';

function Payment({ cartTotal }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    if (paymentMethod === 'cash') {
      setOrderPlaced(true);
    }
  };

  return (
    <div className="payment-page">
      <h2>Total Amount: ${cartTotal}</h2>

      <div className="payment-options">
        <label>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Card
        </label>

        <label>
          <input
            type="radio"
            value="cash"
            checked={paymentMethod === 'cash'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>
      </div>

      {paymentMethod === 'card' && (
        <form className="card-details" onSubmit={handlePayment}>
          <input type="text" placeholder="Card Number" required />
          <input type="text" placeholder="Card Holder Name" required />
          <input type="text" placeholder="Expiry Date" required />
          <input type="text" placeholder="CVV" required />
          <button type="submit">Pay</button>
        </form>
      )}

      {paymentMethod === 'cash' && (
        <button className="confirm-button" onClick={handlePayment}>Confirm</button>
      )}

      {orderPlaced && (
        <div className="order-message">
          Your product is on the way!
        </div>
      )}
    </div>
    
  );
}

export default Payment;