import React, { useEffect, useState } from 'react';
import { cart } from '../../api/api';
import './Cart.css';

const Cart = () => {
  const [cartState, setCartState] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      let cartData = await fetch('https://fakestoreapi.com/carts')
        .then((response) => response.json())
        .then((data) => data);
      setCartState(cartData);
    };
    loadCart();
  }, []);

  return (
    <div className="cart__container">
      Cart:
      <p className="cart-desc">count - {cartState.count}</p>
      <p className="cart-desc">amount - {cartState.amount}</p>
    </div>
  );
};

export default Cart;
