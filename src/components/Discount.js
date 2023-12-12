import React, { useState } from 'react';

export default function Discount({ children }) {
  const [price, setPrice] = useState(100);

  const applyDiscount = () => {
    // Update the price to $75
    setPrice(75);
  };

  return (
    <div>
      <p data-testid="price">${price}</p>
      <button onClick={applyDiscount}>{children} Apply Discount</button>
    </div>
  );
}
