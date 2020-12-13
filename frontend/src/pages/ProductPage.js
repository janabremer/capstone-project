import styled from 'styled-components/macro'
import ProductInfo from '../components/ProductInfo'
import useProduct from '../hooks/useProduct'
import { useParams } from "react-router-dom";
import defaultPhoto from '../assets/defaultPhoto.jpg'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import PageStyled from '../styles/PageStyled'

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
    const { product, photo, productState, photoState } = useProduct(productId | id)
    const imgSrc = photoState === 'ERROR' ? defaultPhoto : photo.url

    return(
        <ProductPageStyled imgSrc={imgSrc}>
            <ProductInfo name={product.name} water={product.water} apiState={productState} />
            {lastProduct && nextProductPage && <Button text={'next'} onClick={onLoadNext} />}
            {firstProduct && prevProductPage && <Button text={'previous'} onClick={onLoadPrev} />}
        </ProductPageStyled>
    )
}

const ProductPageStyled = styled(PageStyled)`
    background-image: url(${props => props.imgSrc});
    background-position: center;
    flex: 1 0 100%;
    gap: var(--gap-large);
    place-items: start;
    scroll-snap-align: start;
`