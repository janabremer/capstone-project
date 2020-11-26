import styled from 'styled-components/macro'
import useProduct from '../hooks/useProduct'
import Photo from '../components/ProductPhoto'
import ProductInfo from '../components/ProductInfo'

export default function ProductPage({productId}) {
    const {product, photo} = useProduct(productId)

    return(
        <PageStyled>
            <Photo url={photo.url} photographer={photo.photographer} />
            <ProductInfo name={product.name} water={product.water}/>
        </PageStyled>
    )
}

const PageStyled = styled.main`
    display: grid;
    gap: var(--gap-large);
    justify-items: center;
`