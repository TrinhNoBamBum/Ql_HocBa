import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Body from 'components/Body';

import { Route, Switch } from 'react-router-dom';
import { MainRoute } from 'components/config';

// lib > interface > global(biến const) > utils(các hàm helper) > component > style
const Main = () => {
  return (
    <div><Header />
      <section className="main-content">
        <Switch>
          {MainRoute.map(item => (
            <Route path={'/' + item.path} key={item.path} exact={item.extra} >
              <item.component></item.component>
            </Route>
          ))}
        </Switch>
      </section>
      
      <Footer /></div>
  )
}

export default Main