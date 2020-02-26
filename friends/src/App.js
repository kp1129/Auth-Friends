import React from "react";
import "./App.css";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <PrivateRoute path="/protected" component={FriendsList} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
