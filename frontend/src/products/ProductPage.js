import { useState, useEffect } from 'react'
import getProductById from '../services/getProductById'
//import getImage from '../services/getImage'

export default function ProductPage({productId}) {

    const [product, setProduct] = useState({
        name: '',
        water: '',
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
        getImage(product.name)
            .then(data => {
                const photoData = data.photos[0]
                setPhoto({
                    photographer: photoData['photographer'],
                    url: photoData['src'].medium,
                    pexelUrl: photoData['url']})
            })
            .catch(error => console.log(error))
      }, [product.name])

   
    function getImage(queryParam) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "563492ad6f9170000100000171d02304f5cb4f27af21cfdd6441ef0a");
        myHeaders.append("Cookie", "__cfduid=d7f813d0b0ba48aa2770e52f585f84bb01606308963");
    
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
    
        return fetch(`https://api.pexels.com/v1/search?per_page=1&query=${queryParam}`, requestOptions)
            .then(res => res.json()) 
    }   

    return(
        <>
           
            <img 
                src={photo.url}
                alt="" width="300px"
               />
            <h2>{product.name}</h2>
            <p>{product.water} litres/kg</p>
        </>
    )
    
}