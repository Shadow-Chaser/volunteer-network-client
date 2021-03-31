import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import AddEvents from './components/AddEvents/AddEvents';


function App() {
  return (
    <div className="App">
       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addEvents">Add Event</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/addEvents">
            <AddEvents></AddEvents>
          </Route>
          <Route path="/dashboard">
            
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
