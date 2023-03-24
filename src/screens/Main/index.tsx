import React, { Suspense } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';

import { BrowserRouter as Router, Link, Redirect, Route, Switch, useParams } from 'react-router-dom';
import { MainRoute } from 'components/config';
import SideBar from 'components/SideBar';

// lib > interface > global(biến const) > utils(các hàm helper) > component > style
const Main = () => {
  
  return (
    <div>
      <Header />
      <SideBar/>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 AllContainer">
        
        <Switch>
          {MainRoute.map(item => (
            <Route path={'/main/' + item.path} key={item.path} exact={item.extra}>
              <Suspense fallback="...Loading">
                <item.component />
              </Suspense>
       
            </Route>

          ))}
        </Switch>
      </main>

      <Footer /></div>
  )
}

export default Main


