import React, { Suspense } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Demo from 'components/demo/demo';
import Body from 'components/Body';
import CartFashion from 'components/CartFashion';
import { BrowserRouter as Router, Link, Route, Switch, useParams } from 'react-router-dom';
import { MainRoute } from 'components/config';

// lib > interface > global(biến const) > utils(các hàm helper) > component > style
const Main = () => {
  const params = useParams();
  console.log({ params })
  return (
    <div>
      <Header />
      <section className="main-content">
        <Switch>
          {MainRoute.map(item => (
            <Route path={'/' + item.path} key={item.path} exact={item.extra}  >
              <Suspense fallback="...Loading">
                <item.component />
              </Suspense>
            </Route>

          ))}
        </Switch>
      </section>

      <Footer /></div>
  )
}

export default Main


