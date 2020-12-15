import { useState, useEffect } from 'react'
import getProductsPerPage from '../services/getProductsPerPage'

export default function useProductsPerPage() {
    const [apiPage, setApiPage] = useState('/categories?page=1')
    const [requestStatus, setRequestStatus]= useState('LOADING')
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
        setRequestStatus('LOADING')
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
                setRequestStatus('SUCCESS')
            })
            .catch((error) => {
                setRequestStatus('ERROR')
            })
    }, [apiPage])
    

    function updateApiPage(apiPage) {
        setApiPage(apiPage)
    }

    return {
        products,
        requestStatus,
        updateApiPage
    }
}