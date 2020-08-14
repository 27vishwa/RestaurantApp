import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home'
import RestaurantCreate from './components/RestaurantCreate'
import RestaurantDetail from './components/RestaurantDetail'
import RestaurantList from './components/RestaurantList'
import RestaurantSearch from './components/RestaurantSearch'
import RestaurantUpdate from './components/RestaurantUpdate'
import Login from './components/Login'
import Protected from './components/Protected'
import Logout from './components/Logout'
function App() {
  return (
    <div className="App">
     <Router>
     
     
         
         
          <Route path="/Logout"> <Logout /> </Route>
          
           <Route path="/Login"> <Login /> </Route>
           <Protected exact path="/Update/:id" component={RestaurantUpdate} />
          <Protected exact path="/Detail" component={RestaurantDetail} />
          <Protected exact path="/Search" component={RestaurantSearch} />
          <Protected exact path="/Create" component={RestaurantCreate} />
          <Protected exact path="/List" component={RestaurantList} />
          <Protected exact path="/" component={Home} />
       </Router>
    </div>
  );
}

export default App;
