import { useState, useEffect } from 'react'
import getProducts from './services/getProducts';
import getProductById from './services/getProductById';


function App() {

  const [products, setProducts] = useState([])
  const [productById, setProductById] = useState([])

  useEffect(() => {
    getProducts()
    .then(data => setProducts(data))
    .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    getProductById(3)
    .then(data => setProductById(data))
    .catch(error => console.log(error))
  }, [])
  

  return (
    <div className="App">
      <h1>Virtual Water App</h1>
      <h2>list of products:</h2>
      <ul>
        {products.map(({id, name, virtualWater}) => <li key={id} >{name}: {virtualWater} litres/kg</li>)
        }
      </ul>
      <section>
        <h2>{productById.name}:</h2>
        <p>Virtual water: {productById.virtualWater} litres/kg</p>
      </section>
    </div>
  );
}




export default App;
