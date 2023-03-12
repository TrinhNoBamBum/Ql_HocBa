import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { RouteConfig, Routes } from 'components/config';

export default function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          {
            RouteConfig.map(route => (
              <Route key={route.path} path={route.path} exact>
                <Suspense fallback='Loading...'>
                  <route.component />
                </Suspense>
              </Route>
            ))
          }
          <Redirect to={Routes.BODY} />
        </Switch>
      </div>
    </Router>
  );
}