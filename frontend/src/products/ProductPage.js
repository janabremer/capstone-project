import useProduct from '../hooks/useProduct'

export default function ProductPage({productId}) {
    const {product, photo} = useProduct(productId)

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