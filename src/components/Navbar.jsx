import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const { cartItems } = useCart()
  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/cart">Cart ({cartItems.length})</Link>
    </nav>
  )
}

export default Navbar
