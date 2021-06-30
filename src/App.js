
import React from "react";
import Register from './components/users/Registration'
// import HeaderUsers from './components/users/HeaderUsers'
import "./App.css";
//import Navbar from './components/Navbar.js'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Login from "./components/users/Login";
import { Button } from "@material-ui/core";

function App() {
  return (
    <div>
      {/* <HeaderUsers /> */}
      <Router>
        <Button component={NavLink} to="/login">
          Login
        </Button>
  
  
        <Button component={NavLink} to="/register">
          Register
        </Button>
  
  
        <Switch>
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/register" render={props => <Register {...props} />} />
        </Switch>
      </Router>

    </div>
  )
}

export default App;


