import ProductPage from '../pages/ProductPage'
import ProductInfo from '../components/ProductInfo'
import styled from 'styled-components/macro'
import useProductsPerPage from '../hooks/useProductsPerPage'
import { useRef } from 'react'

export default function Gallery() {
    const { products, updateApiPage, apiState } = useProductsPerPage()
    const ref = useRef()

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
                    {products.results.map((product, index) =>
                        <ProductPage 
                            key={product.id} 
                            productId={product.id} 
                            lastProduct={index+1 === products.results.length} 
                            onLoadNext={handleLoadNext} 
                            nextProductPage={!!products.nextPage} 
                            firstProduct={index === 0} 
                            onLoadPrev={handleLoadPrev} 
                            prevProductPage={!!products.prevPage}
                        />
                    )}
                    <div ref={ref}></div>
                </GalleryStyled>
            )
    }
    
    function handleLoadNext(event) {
        event.preventDefault()
        updateApiPage(products.nextPage)
    }

    function handleLoadPrev(event) {
        event.preventDefault()
        updateApiPage(products.prevPage)
    }
}

const GalleryStyled = styled.section`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
`