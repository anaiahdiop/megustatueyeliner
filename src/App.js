import './App.css';
import React, { Component } from "react";
import Exhibit from './components/virtualPage'
import Home from './components/homePage'
import History from './components/historyPage'
import MakeUp from './components/makeUp'
import Featured from './components/featuredPage'
import Contact from './components/contactPage'
import{
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/"> <Home /> </Route>
      <Route exact path="/exhibit"> <Exhibit/> </Route>
      <Route exact path="/ourstory"> <History/> </Route>
      <Route exact path="/makeup"> <MakeUp/> </Route>
      <Route exact path="/featured"> <Featured/> </Route>
      <Route exact path="/contact"> <Contact/> </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
 