import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './containers/Header/Header';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import Footer from './containers/Footer';
import ThemeContext from './ThemeContext';
import { useState } from 'react';
import colors from './data/colors';

function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => theme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, toggleTheme, colors: colors[theme] }}>
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
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
