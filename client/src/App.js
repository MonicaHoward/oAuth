import React, { useEffect } from 'react';
import { Route, Switch} from 'react-router-dom';
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
      <Route>
        <Navbar/>
        <Switch>       
        </Switch>
      </Route>
    </div>
  );
}

export default connect(null, actions)(App);
