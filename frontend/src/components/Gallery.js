import ProductPage from '../pages/ProductPage'
import getProducts from '../services/getProducts'
import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

export default function Gallery () {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
            .then(data => setProducts(data))
            .catch(error => console.log(error))
    }, [])

    return(
        <GalleryStyled>
            {products.map(product => <ProductPage key={product.id} productId={product.id} />)}
        </GalleryStyled>
    )
}

const GalleryStyled = styled.section`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
`