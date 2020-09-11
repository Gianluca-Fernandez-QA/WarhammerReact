import React from 'react';
import {BrowserRouter, Switch,Route, Link} from "react-router-dom"
import Navbar from './NavBar';
import './App.css';
import ArmyBuilder from './ArmyBuilder';
function ArmBui(){
  return <ArmyBuilder />
}
function App() {
  return (
    <BrowserRouter>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
    
      <Navbar />

      <Switch>
        <Route exact path="/" component={ArmBui} />
        <Route exact path="/Armybuilder" component={ArmBui} />
      </Switch>
      </BrowserRouter>

  );
}

export default App;
