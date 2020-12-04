import { Route, Switch } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchPage from './pages/SearchPage'
import NotFoundPage from './pages/NotFoundPage'
import ProductPage from './pages/ProductPage'

export default function App() {
  
  return (
          <Switch>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
  );
}
