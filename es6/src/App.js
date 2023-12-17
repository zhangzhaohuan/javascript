import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

// import { Route,  Router, Switch, Link } from 'react-router';

// es6
import Home from "./page/home";
import MapPage from "./page/es6/map";
import ReducePage from "./page/es6/reduce";
import PromiseDemo from "./page/es6/promise";
import ReflectDemo from "./page/es6/reflect";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <h3>es6</h3>
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
            <h3>js</h3>
            <ul>
              <li>
                <Link to="/bind">bind 、call、apply区别及实现</Link>
              </li>
            </ul>
            <h3>Web API 接口参考</h3>
            <ul>
              <li>
                <Link to="/eventTarget">eventTarget</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/map" component={MapPage} />
              <Route path="/reduce" component={ReducePage} />
              <Route path="/promise" component={PromiseDemo} />
              <Route path="/reflect" component={ReflectDemo} />
              <Route path="/bind" component={BindDemo} />
              <Route path="/eventTarget" component={EventTargetDemo} />


              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
