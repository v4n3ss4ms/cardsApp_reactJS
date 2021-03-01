import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import CardsList from "./components/cardsList/CardsList";
import CardDetails from "./components/cardDetails/CardDetails";
import store from "./store/store";

function App() {
  return (
    <Provider className="App" store={store}>
      <Router>
        <Switch>
          <Route path="/edit/:id">
            <CardDetails />
          </Route>
          <Route path="/">
            <CardsList />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
