import { Route, Switch } from 'react-router-dom'
import Gallery from './components/Gallery'
import Navigation from './components/Navigation'
import LandingPage from './pages/LandingPage'
import NotFoundPage from './pages/NotFoundPage'
import ProductPage from './pages/ProductPage'
import SearchPage from './pages/SearchPage'


export default function App() {
  
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
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
            <Navigation />
        </>
    )
}