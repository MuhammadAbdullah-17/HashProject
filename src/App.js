import React from "react";
import Home from "./Home";
import "./App.css";
import { Redirect, Route, Switch } from 'react-router-dom';
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";

const App = () => {
  return (
    <div>
  
      <Switch>
      <Route exact path ="/" component ={Home}></Route>
      <Route exact path ="/Home" component ={Home}></Route>
      <Route exact path ="/About" component ={About}></Route>
      <Route exact path ="/Portfolio" component ={Portfolio}></Route>
      <Route exact path ="/Services" component ={Services}></Route>
      <Route exact path ="/Contact" component ={Contact}></Route>
      <Redirect path="/" />
    </Switch>
    </div>
  );
};

export default App;
