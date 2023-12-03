import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

// import { Route,  Router, Switch, Link } from 'react-router';

import Home from "./page/home";
import MapPage from "./page/map";
import ReducePage from "./page/reduce";

import PromiseDemo from "./page/promise";

import ReflectDemo from "./page/reflect";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
            <li>
              <Link to="/map">map和set数据结构</Link>
            </li>
            <li>
              <Link to="/reduce">reduce</Link>
            </li>
            <li>
              <Link to="/promise">promise</Link>
            </li>
            <li>
              <Link to="/reflect">reflect</Link>
            </li>
          </ul>
          <Switch>
              <Route path="/map" component={MapPage} />
              <Route path="/reduce" component={ReducePage} />
              <Route path="/promise" component={PromiseDemo} />
              <Route path="/reflect" component={ReflectDemo} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
 
        </Router>
        
      </div>
    );
  }
}

export default App;
