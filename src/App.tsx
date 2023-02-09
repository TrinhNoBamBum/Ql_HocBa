import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { RouteConfig } from 'components/config';

export default function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          {
            RouteConfig.map(route => (
              <Route key={route.path} path={'/' + route.path}>
                <route.component />
              </Route>
            ))
          }
        </Switch>
      </div>
    </Router>
  );
}