import {Route, Switch } from 'react-router-dom'
import ProductPage from './products/ProductPage'

export default function App() {

  return (
      <Switch>
        <Route exact path="/">
          <ProductPage productId={4} />
        </Route>
      </Switch>
  );
}