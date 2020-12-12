import { useState, useEffect } from 'react'
import getProductsPerPage from '../services/getProductsPerPage'

export default function useProductsPerPage() {
    const [apiPage, setApiPage] = useState('/categories?page=1')
    const [apiState, setApiState]= useState('LOADING')
    const [products, setProducts] = useState({
        data: [],
        currentPage: '',
        lastPage: ''
    })

    useEffect(() => {
        setApiState('LOADING')
        getProductsPerPage(apiPage) 
            .then(data => {
                setProducts({
                    data: data.products,
                    total: data.total,
                    count: data.count,
                    currentPage: data.links.self,
                    lastPage: data.links.last,
                    nextPage: data.links.next
                })
                setApiState('SUCCESS')
            })
            .catch((error) => {
                setApiState('ERROR')
            })
    }, [apiPage])
    
    return {
        products,
        loadNextProductPage,
        apiState
    }

    function loadNextProductPage(nextApiPage) {
        setApiPage(nextApiPage)
    }
}
