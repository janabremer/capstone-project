import styled from 'styled-components/macro'
import { Route, Switch } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchPage from './pages/SearchPage'
import NotFoundPage from './pages/NotFoundPage'
import ProductPage from './pages/ProductPage'
import LandingPage from './pages/LandingPage'
import Navigation from './components/Navigation'

export default function App() {
  
    return (
        <AppStyled>
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
        </AppStyled>
    )
}

const AppStyled = styled.div`
    /* display: grid;
    grid-template-rows: auto 57px;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;     */
`
