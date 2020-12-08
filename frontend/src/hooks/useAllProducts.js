import { useState, useEffect } from 'react'
import getProducts from '../services/getProducts'

export default function useAllProduct() {
    const [apiState, setApiState]= useState('LOADING')
    const [products, setProducts] = useState([])

    useEffect(() => {
        setApiState('LOADING')
        getProducts()
            .then(data => {
                setProducts(data)
                setApiState('SUCCESS')
            })
            .catch((error) => {
                setApiState('ERROR')
            })
    }, [])
    
    return {
        products,
        apiState
    }
}
