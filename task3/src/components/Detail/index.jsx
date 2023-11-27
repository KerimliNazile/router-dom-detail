import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './index.css'
const Detail = () => {
    const [product, setProduct] = useState([])
    const { productId } = useParams()
    console.log(productId);
    useEffect(() => {
        try {
            const getProducts = async () => {
                const res = await axios.get(`http://localhost:3000/show/${productId}`);
                console.log(res);
                setProduct(res.data);
            };
            getProducts()
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div>
            {product && 
                <div key={product.id}>
                    <img src={product.image} alt="" />
                    <p>{product.id}</p>
                    <p>{product.name}</p>
                    
                </div>
           }
        </div>
    )
}

export default Detail
