import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './containers/Header/Header';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import Footer from './containers/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/mobileapps" exact>
          <h1>MobileApps</h1>
        </Route>

        <Route path="/:category" exact>
          <Category />
        </Route>

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
