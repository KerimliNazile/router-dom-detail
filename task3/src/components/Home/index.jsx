import React, { useEffect } from 'react'
import './index.css'
import ShowApi from '../hook/ShowApi'
import { Link } from 'react-router-dom'

const Home = () => {
  const [data, getProducts] = ShowApi()
  useEffect(() => {
    getProducts()
  }, [])

  return (

    <div className='card'>

      {data && data.map((item) => (
        <ul key={item.id}>
          <li><img src={item.image} alt="" /></li>
          <li>{item.category}</li>
          <li>{item.name}</li>
          <Link to={`/${item.id}`}><button>Enter</button></Link>
        </ul>
      ))}
    </div>

  )
}

export default Home
