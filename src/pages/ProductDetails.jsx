import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useCart } from '../context/CartContext'

const fetchProduct = async ({ queryKey }) => {
  const [, id] = queryKey
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
  return data
}

const ProductDetails = () => {
  const { id } = useParams()
  const { addToCart } = useCart()

  const { data, isLoading, error } = useQuery(['product', id], fetchProduct)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error fetching product</p>

  return (
    <div style={{ padding: '1rem' }}>
      <img src={data.image} alt={data.title} style={{ width: '200px' }} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>Price: ₹{data.price}</p>
      <button onClick={() => addToCart(data)}>Add to Cart</button>
    </div>
  )
}

export default ProductDetails
