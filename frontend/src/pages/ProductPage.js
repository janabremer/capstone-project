import styled from 'styled-components/macro'
import ProductInfo from '../components/ProductInfo'

export default function ProductPage({product, photo}) {

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