import {Route, Switch } from 'react-router-dom'
import ProductPage from './pages/ProductPage'

export default function App() {

  return (
      <>
        <Switch>
          <Route exact path="/">
            <ProductPage productId={1} /> 
          </Route>
        </Switch>
      </>
  );
}