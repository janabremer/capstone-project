import ProductPage from '../pages/ProductPage'
import ProductInfo from '../components/ProductInfo'
import styled from 'styled-components/macro'
import useProductsPerPage from '../hooks/useProductsPerPage'
// import { useState } from 'react'

export default function Gallery() {
    // const [apiPage, setApiPage] = useState(1)
    const { products, loadNextProductPage, apiState } = useProductsPerPage()
    
    switch(apiState) {
        case 'LOADING':
            return (
                <GalleryStyled>
                    <ProductInfo apiState={apiState} />
                </GalleryStyled>
            )
        case 'ERROR':
            return (
                <GalleryStyled>
                    <ProductInfo apiState={apiState} />
                </GalleryStyled>
            )
        default:
            return(
                <GalleryStyled>
                    {products.data.map((product, index) =>
                        <ProductPage key={product.id} productId={product.id} lastProduct={index+1 === products.count} onLoadMore={handleLoadMore} nextProductPage={products.nextPage} />
                    )}
                </GalleryStyled>
            )
    }
    
    function handleLoadMore() {
        // setApiPage(apiPage + 1)
        loadNextProductPage(products.nextPage)
    }
}



const GalleryStyled = styled.section`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
`