import { Route, Switch } from 'react-router-dom'
import Gallery from './components/Gallery'


export default function App() {
  
  return (
        <Switch>
          <Route exact path="/">
            <Gallery />
          </Route>
        </Switch>
  );
}