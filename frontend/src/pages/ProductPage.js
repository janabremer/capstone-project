import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import styled from 'styled-components/macro';
import defaultPhoto from '../assets/backgroundPhoto.jpg';
import Button from '../components/Button';
import { ArrowLeftIcon, ArrowRightIcon } from '../components/Icons';
import PhotoLink from '../components/PhotoLink';
import ProductInfo from '../components/ProductInfo';
import useProduct from '../hooks/useProduct';
import BasePage from '../styles/BasePage';

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
        <ProductPageStyled imgSrc={imgSrc}>
            <ProductInfo name={product.name} water={product.water} apiState={productState} />
            {lastProduct && nextProductPage && <Button text={'next'} onClick={onLoadNext} iconComponentRight={<ArrowRightIcon />} />}
            {firstProduct && prevProductPage && <Button text={'previous'} onClick={onLoadPrev} iconComponentLeft={<ArrowLeftIcon />} />}
            {photoState === 'ERROR' ? <PhotoLink /> : <PhotoLink photographer={photo.photographer} plattform={photo.plattform} url={photo.pexelsUrl} />}
        </ProductPageStyled>
    )
}

const ProductPageStyled = styled(BasePage)`
    align-items: start;
    background-image: url(${props => props.imgSrc});
    background-position: center;
    flex: 1 0 100%;
    gap: var(--gap-large);
    justify-items: center;
    scroll-snap-align: start;
`