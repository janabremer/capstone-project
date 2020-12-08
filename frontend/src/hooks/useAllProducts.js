import { useState, useEffect } from 'react'
import getProducts from '../services/getProducts'

export default function useAllProducts() {

    const apiStates = {
        LOADING: 'LOADING',
        SUCCESS: 'SUCCESS',
        ERROR: 'ERROR'
    }
    
    const [products, setProducts] = useState({
        state: apiStates.LOADING,
        error: '',
        data: []
    })


    useEffect(() => {
        setPartialProductsData({
            state: apiStates.LOADING
        })
        getProducts()
            .then(data => {
                setPartialProductsData({
                    state: apiStates.SUCCESS,
                    data: data
                })
                })
            .catch((error) => {
                setPartialProductsData({
                    state: apiStates.ERROR,
                    error: 'error: server is down'
                })
            })
    }, [])

    function setPartialProductsData(partialProductsData) {
        setProducts({ ...products, ...partialProductsData });
    }

    
    return {
        products
    }
}
