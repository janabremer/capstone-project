import styled from 'styled-components/macro'
import ProductInfo from '../components/ProductInfo'
import useProduct from '../hooks/useProduct'

export default function ProductPage({productId}) {
    const {product, photo} = useProduct(productId)

    return(
        <PageStyled imgUrl={photo.url}>
            <ProductInfo name={product.name} water={product.water}/>
        </PageStyled>
    )
}

const PageStyled = styled.main`
    background-image: url(${props => props.imgUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
    display: grid;
    gap: var(--gap-large);
    height: 100vh;
    padding: 40px;
    place-items: end;
`