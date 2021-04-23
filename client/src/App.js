import React, { useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions'
import './App.css';
import Navbar from './components/navbar/Navbar';



function App(props) {

  useEffect(() => {
    props.fetchUser();
  });

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Switch>
            
          </Switch>
        </BrowserRouter> 
    </div>
  );
}

export default connect(null, actions)(App);
