import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import Search from "./pages/search/search.component";
import Sort from "./pages/sort/sort.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={Search} />
        <Route path="/sort" component={Sort} />
      </Switch>
    </div>
  );
}

export default App;
