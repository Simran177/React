import React from "react";
import NavBar from "./Components/React Router/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/React Router/Home";
import About from "./Components/React Router/About";
import Contact from "./Components/React Router/Contact";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NotFound from "./Components/React Router/NotFound";
import "./Components/React Router/App.css";
function App() {

  return (
    <Router>
  <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route component={NotFound}></Route>
    </Switch>
    </div>
  </Router>
);

}

export default App;