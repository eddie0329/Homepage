import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Err from "./pages/Error";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
        <Route component={Err} />
      </Switch>
    </HashRouter>
  );
}

export default App;
