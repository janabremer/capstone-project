import { useState, useEffect } from 'react'

function App() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    getProductsData().then(data => setProducts(data))
  }, [])
  function getProductsData() {
    return fetch('http://virtualwater.local/products')
      .then(res => res.json())
  }

  return (
    <div className="App">
      <ul>
        {products.map(({id, name, virtualWater}) => <li key={id} >{name}: {virtualWater} litres/kg</li>)
        }
      </ul>
    </div>
  );
}




export default App;
