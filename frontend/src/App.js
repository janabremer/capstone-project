import { Route, Switch } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchPage from './pages/SearchPage'


export default function App() {
  
  return (
        <Switch>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
  );
}