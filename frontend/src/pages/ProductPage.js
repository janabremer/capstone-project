import styled from 'styled-components/macro'
import ProductInfo from '../components/ProductInfo'
import useProduct from '../hooks/useProduct'
import { useParams } from "react-router-dom";
import defaultPhoto from '../assets/defaultPhoto.jpg'
import PropTypes from 'prop-types'
 
export default function ProductPage({productId}) {
    ProductPage.propTypes = {productId: PropTypes.number}
    const { id } = useParams()
    const { product, photo, productState, photoState } = useProduct(productId | id)
    
    const imgSrc = photoState === 'ERROR' ? defaultPhoto : photo.url
    console.log(product)
    return(
        <PageStyled imgSrc={imgSrc}>
            <ProductInfo name={product.name} water={product.water} apiState={productState} />
        </PageStyled>
    )
}

const PageStyled = styled.main`
    background-image: url(${props => props.imgSrc});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
    display: grid;
    flex: 1 0 100%;
    gap: var(--gap-large);
    height: 100vh;
    padding: 40px;
    place-items: end;
    scroll-snap-align: start;
`