import styled from 'styled-components/macro'
import ProductInfo from '../components/ProductInfo'
import useProduct from '../hooks/useProduct'
import { useParams } from "react-router-dom";
import defaultPhoto from '../assets/defaultPhoto.jpg'

 
export default function ProductPage({productId}) {
    const { id } = useParams()
    const { product, photo } = useProduct(productId | id)
    
    const imgSrc = photo.state = 'ERROR' ? defaultPhoto : photo.url

    return(
        <PageStyled imgSrc={imgSrc}>
            <ProductInfo name={product.name} water={product.water} apiState={product.state} errorMessage={product.error}/>
        </PageStyled>
    )
}

const PageStyled = styled.main`
    background-image: url(${props => props.imgSrc});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
    display: grid;
    gap: var(--gap-large);
    height: 100vh;
    padding: 40px;
    place-items: end;
    flex: 1 0 100%;
    scroll-snap-align: start;
`