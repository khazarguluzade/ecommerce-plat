import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>ŞAPKALAR</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </Switch>
  );
}

export default App;
