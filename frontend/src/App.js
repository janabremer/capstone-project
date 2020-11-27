import {Route, Switch } from 'react-router-dom'
import ProductPage from './pages/ProductPage'

export default function App() {

  return (
      <App>
        <Switch>
          <Route exact path="/">
            <ProductPage productId={1} /> 
          </Route>
        </Switch>
      </App>
  );
}