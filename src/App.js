import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import Home from "./pages/Home/Home";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch >
            <Route path="/" exact> <Home /></Route>
            <Route path="/chat/:id"> <Chat /></Route>
          </Switch>
        </BrowserRouter>

      </div>
    </Provider>

  );
}

export default App;
