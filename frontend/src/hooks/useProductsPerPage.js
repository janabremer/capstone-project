import { useState, useEffect } from 'react'
import getProductsPerPage from '../services/getProductsPerPage'

export default function useProductsPerPage() {
    const [apiPage, setApiPage] = useState('/categories?page=1')
    const [apiState, setApiState]= useState('LOADING')
    const [products, setProducts] = useState({
        results: [],
        total: null,
        count: null,
        currentPage: '/categories?page=1',
        lastPage: '',
        nextPage: '',
        prevPage: ''
    })
    

    useEffect(() => {
        setApiState('LOADING')
        getProductsPerPage(apiPage) 
            .then(data => {
                setProducts({
                    results: data.products,
                    total: data.total,
                    count: data.count,
                    currentPage: data.links.self,
                    lastPage: data.links.last,
                    nextPage: data.links.next,
                    prevPage: data.links.prev
                })
                setApiState('SUCCESS')
            })
            .catch((error) => {
                setApiState('ERROR')
            })
    }, [apiPage])
    

    function updateApiPage(apiPage) {
        setApiPage(apiPage)
    }

    return {
        products,
        apiState,
        updateApiPage
    }
}
