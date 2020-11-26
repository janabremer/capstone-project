import { useState, useEffect } from 'react'
import getProductById from '../services/getProductById'
import getPhoto from '../services/getPhoto'

export default function useProduct(productId) {

    const [product, setProduct] = useState({
        name: '',
        water: null,
    })

    const [photo, setPhoto] = useState({
        photographer: '',
        url: '',
        pexelUrl: ''
    })

    useEffect(() => {
        getProductById(productId)
            .then(data => setProduct({
                name: data.name, 
                water: data.virtualWater}))
            .catch(error => console.log(error))
    }, [productId])

    useEffect(() => {
        if (product.name !== "") {
            getPhoto(product.name)
            .then(data => {
                const photoData = data.photos[0]
                setPhoto({
                    photographer: photoData['photographer'],
                    url: photoData['src'].medium,
                    pexelUrl: photoData['url']})
            })
            .catch(error => console.log(error))
        }        
    }, [product.name])

    return {
        product,
        photo
    }
}