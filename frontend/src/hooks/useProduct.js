import { useState, useEffect } from 'react'
import getProductById from '../services/getProductById'
import getPhoto from '../services/getPhoto'
import PropTypes from 'prop-types'

export default function useProduct(productId) {
    useProduct.propTypes = {productId: PropTypes.number}

    const [productState, setProductState]= useState('LOADING')
    const [photoState, setPhotoState]= useState('LOADING')

    const [product, setProduct] = useState({
        name: '',
        water: null
    })

    const [photo, setPhoto] = useState({
        photographer: '',
        url: '',
        pexelUrl: ''
    })

    useEffect(() => {
        setProductState('LOADING')
        getProductById(productId)
            .then(data => {
                setProduct({
                    name: data.category, 
                    water: data.totalWater,
                })
                setProductState('SUCCESS')
            })
            .catch((error) => {
                setProductState('ERROR')
            })
    }, [productId])

    useEffect(() => {
        setPhotoState('LOADING')
        product.name && getPhoto(product.name)
            .then(data => {
                const photoData = data.photos[0]
                setPhoto({
                    photographer: photoData['photographer'],
                    url: photoData['src'].large,
                    pexelUrl: photoData['url'],
                })
                setPhotoState('SUCCESS')
            })
            .catch((error) => {
                setPhotoState('ERROR')
            })
        }, [product.name])
    
    return {
        product,
        productState,
        photo,
        photoState
    }
}
