import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import { RouteConfig, Routes } from 'components/config';
import Main from "screens/Main";
import Student from "screens/Student";
import Login from "screens/Login";
import RoleAdmin from "screens/RoleAdmin";


export default function App() {
  return (
    <Router>

      <div className="main">





          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/main">
              <Main />
            </Route>
            <Route path="/student">
              <Student />
            </Route>
            <Route path="/admin">
              <RoleAdmin />
            </Route>
            <Route path="/">
              <Login />
            </Route>
            
          </Switch>

        

        {/* <Student/> */}
        {/* <RoleAdmin/> */}
        {/* <Login></Login> */}

        {/* <Switch>
          {
            RouteConfig.map(route => (
              <Route key={route.path} path={route.path} exact>
                <Suspense fallback='Loading...'>
                  <route.component />
                </Suspense>
              </Route>
            ))
          }
       
        </Switch> */}
      </div>
    </Router>
  );
}