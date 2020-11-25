import {Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import ProductPage from './products/ProductPage'

export default function App() {

  return (
      <AppLayout>
        <Switch>
          <Route exact path="/">
            <ProductPage productId={3} />
          </Route>
        </Switch>
      </AppLayout>
  );
}

const AppLayout = styled.div`
    padding: 40px;
`