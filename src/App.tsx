import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { Auth } from "./containers";
import { Header } from "./components"


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/sign-in" component={Auth} />
      </Switch>
    </div>
  );
};

export default App;
