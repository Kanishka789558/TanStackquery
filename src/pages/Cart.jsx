import React from 'react'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cartItems, removeFromCart } = useCart()

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '1rem' }}>
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  )
}

export default Cart
