import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
