import React from 'react';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        {/* <nav>
          <Link to="/login">Login</Link>
        </nav> */}
        <Route exact path="/" component={Login} />
         
        <Route path="/login" component={Login} />
       
          <PrivateRoute exact path="/protected" component={FriendsList} />
            
      </header>
    </div>
    </Router>
  );
}

export default App;
