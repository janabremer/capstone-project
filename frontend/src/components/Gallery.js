import ProductPage from '../pages/ProductPage'
import ProductInfo from '../components/ProductInfo'
import styled from 'styled-components/macro'
import useAllProducts from '../hooks/useAllProducts'

export default function Gallery() {
    const { products } = useAllProducts()
    switch (products.state) {
        case 'LOADING':
            return <ProductInfo apiState={products.state} />
        case 'ERROR':
            return <ProductInfo apiState={products.state} errorMessage={products.error} />
        default:
            return(
                <GalleryStyled>
                    {products.data.map(product =>
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