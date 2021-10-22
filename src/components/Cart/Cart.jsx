import React, { useEffect, useState } from 'react';
import { cart } from '../../api/api';

const Cart = () => {
  const [cartState, setCartState] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      let cartData = await fetch('http://localhost:3000/cart')
        .then((response) => response.json())
        .then((data) => data);
      setCartState(cartData);
    };
    loadCart();
  }, []);

  return (
    <div>
      Cart
      <p>count: {cartState.count}</p>
      <p>amount: {cartState.amount}</p>
    </div>
  );
};

export default Cart;
