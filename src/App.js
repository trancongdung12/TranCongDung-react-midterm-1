import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Room from './components/Room';
import AddRoom from './components/AddRoom';
import NavBar from './components/NavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
class App extends Component {
  
  render(){
    return (
     
      <div className="App">
        <Router>
                <NavBar/>
                    <Switch>   
                    <Route exact  path="/">
                        <Room/>
                    </Route>
                    <Route exact path="/addroom">
                        <AddRoom  />
                    </Route>
                    </Switch>
        </Router> 
      </div> 
     
    );
  }
}

export default App;
