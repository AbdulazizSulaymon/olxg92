import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './containers/Header/Header';
import Page404 from './pages/Page404';
import Category from './pages/Category';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/:category" exact>
          <Category />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
