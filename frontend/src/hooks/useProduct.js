import { useState, useEffect } from 'react'
import getProductById from '../services/getProductById'
import getPhoto from '../services/getPhoto'
import PropTypes from 'prop-types'

export default function useProduct(productId) {
    useProduct.propTypes = {productId: PropTypes.number}

    const apiStates = {
        LOADING: 'LOADING',
        SUCCESS: 'SUCCESS',
        ERROR: 'ERROR'
    }
    
    const [product, setProduct] = useState({
        name: '',
        water: null,
        state: apiStates.LOADING,
        error: ''
    })

    const [photo, setPhoto] = useState({
        photographer: '',
        url: '',
        pexelUrl: '',
        state: apiStates.LOADING,
        error: ''
    })

    useEffect(() => {
        setPartialProductData({
            state: apiStates.LOADING
        })
        getProductById(productId)
            .then(data => {
                setPartialProductData({
                    name: data.category, 
                    water: data.totalWater,
                    state: apiStates.SUCCESS
                })
                })
            .catch((error) => {
                setPartialProductData({
                    state: apiStates.ERROR,
                    error: 'error: server is down'
                })
            })
    }, [productId])

    useEffect(() => {
        setPartialPhotoData({
            state: apiStates.LOADING
        })
        product.name && getPhoto(product.name)
            .then(data => {
                const photoData = data.photos[0]
                setPartialPhotoData({
                    photographer: photoData['photographer'],
                    url: photoData['src'].large,
                    pexelUrl: photoData['url'],
                    state: apiStates.SUCCESS
                })
            })
            .catch((error) => {
                setPartialPhotoData({
                    state: apiStates.ERROR,
                    error: 'photo fetch failed'
                })
            })
        }, [product.name])

    function setPartialProductData(partialProductData) {
        setProduct({ ...product, ...partialProductData });
    }

    function setPartialPhotoData(partialPhotoData) {
        setPhoto({ ...photo, ...partialPhotoData });
    }
    
    return {
        product,
        photo,
    }
}
