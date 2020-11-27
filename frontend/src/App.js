import {Route, Switch } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import useProduct from './hooks/useProduct'

export default function App() {
  const productId = 1
  const {product, photo} = useProduct(productId)

  return (
      <App>
        <Switch>
          <Route exact path="/">
            <ProductPage product={product} photo={photo} /> 
          </Route>
        </Switch>
      </App>
  );
}