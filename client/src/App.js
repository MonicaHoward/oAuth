import React, { useEffect } from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';



function App(props) {

  useEffect(() => {
    props.fetchUser();
  });

  return (
    <div className="App">
      <Route>
        <Navbar/>
        <Switch>
        <Link to="/" component={Home} />
        </Switch>
      </Route>
    </div>
  );
}

export default connect(null, actions)(App);
