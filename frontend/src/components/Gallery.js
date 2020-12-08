import ProductPage from '../pages/ProductPage'
import ProductInfo from '../components/ProductInfo'
import styled from 'styled-components/macro'
import useAllProducts from '../hooks/useAllProducts'

export default function Gallery() {
    const { products, apiState } = useAllProducts()
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
                    {products.map(product =>
                        <ProductPage key={product.id} productId={product.id} />
                    )}
                </GalleryStyled>
            )
    }
}



const GalleryStyled = styled.section`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
`