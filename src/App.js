import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
