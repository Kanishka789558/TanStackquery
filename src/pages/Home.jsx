import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

const fetchProducts = async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products')
  return data
}

const Home = () => {
//   const { data, isLoading, error } = useQuery(['products'], fetchProducts)
  const { data, isLoading } = useQuery({
  queryKey: ["products"],
  queryFn: fetchProducts,
});


  if (isLoading) return <p>Loading...</p>
//   if (error) return <p>Error loading products.</p>

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {data.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
            <h3>{product.title}</h3>
            <p>₹{product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
