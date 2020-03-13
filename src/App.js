import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Context from "./context";
import About from "./pages/About";
import User from "./pages/User";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import "./App.css";

function App() {

  return (
    <Context>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Alert />
                  <Search />
                  <Users />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:username"
              render={props => <User {...props} />}
            />
          </Switch>
        </div>
      </div>
    </Context>
  );
}

export default App;
