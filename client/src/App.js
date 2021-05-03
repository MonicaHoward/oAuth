import React, { useEffect } from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';




function App(props) {

  useEffect(() => {
    props.fetchUser();
  });

  return (
    <div className="App">
      <Route>
        <Navbar/>
        <Switch>
          <Link exact to="/" component={Home} />
          <Link to="/home" component={Home} />
          <Link to="/about" component={About} />
        </Switch>
      </Route>
    </div>
  );
}

export default connect(null, actions)(App);
