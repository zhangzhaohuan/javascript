import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Demo2 from './demo2'
import Demo1 from './demo1'

export default class PromiseDemo extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/promise">
              Promise在事件循环中的执行过程是怎样的
            </Link>
          </li>
          <li>
            <Link to="/promise/demo2">手写promise</Link>
          </li>
        </ul>
        <div>
          <Switch>
            <Route path="/promise/demo2" component={Demo2} />
            <Route path="/promise" component={Demo1} />
          </Switch>
        </div>
      </div>
    );
  }
}
