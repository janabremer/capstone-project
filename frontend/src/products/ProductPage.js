import { useState, useEffect } from 'react'
import getProducts from '../services/getProducts'
import getProductById from '../services/getProductById'

export default function ProductPage() {

    //const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])
  
    // useEffect(() => {
    //   getProducts()
    //   .then(data => setProducts(data))
    //   .catch(error => console.log(error))
    // }, [])
  
    useEffect(() => {
      const productId = 2
      getProductById(productId)
      .then(data => setProduct(data))
      .catch(error => console.log(error))
    }, [])


    return(
        <>
            <image />
            <h2>{product.name}</h2>
            <p>{product.virtualWater} litres/kg</p>
        </>
    )
    
}