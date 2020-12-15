import styled from 'styled-components/macro'
import ProductInfo from '../components/ProductInfo'
import useProduct from '../hooks/useProduct'
import { useParams } from "react-router-dom";
import defaultPhoto from '../assets/defaultPhoto.jpg'
import PropTypes from 'prop-types'
import Button from '../components/Button'

ProductPage.propTypes = {
    productId: PropTypes.number,
    lastProduct: PropTypes.bool,
    nextProductPage: PropTypes.bool,
    onLoadMore: PropTypes.func,
    firstProduct: PropTypes.bool, 
    prevProductPage: PropTypes.bool, 
    onLoadPrev: PropTypes.func
}

export default function ProductPage({productId, lastProduct, nextProductPage, onLoadNext, firstProduct, prevProductPage, onLoadPrev}) {

    const { id } = useParams()
    productId = (productId === undefined) ? id : productId

    const { product, photo, productState, photoState } = useProduct(productId)
    const imgSrc = photoState === 'ERROR' ? defaultPhoto : photo.url

    return(
        <PageStyled imgSrc={imgSrc}>
            <ProductInfo name={product.name} water={product.water} requestStatus={productState} />
            {lastProduct && nextProductPage && <Button onClick={onLoadNext}>next</Button>}
            {firstProduct && prevProductPage && <Button onClick={onLoadPrev}>previous</Button>}
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