import { MainRoute, StudentRoute } from "components/config";
import Header from "components/Header";
import HeaderStudent from "components/HeaderStudent";
import SideBar from "components/SideBar";
import React, { Suspense } from "react";
import { Switch,Route } from "react-router-dom";
const Student=()=>{
    return (
        <div>
            <HeaderStudent />

      <div >
        
        <Switch>
          {StudentRoute.map(item => (
            <Route path={'/student/' + item.path} key={item.path} exact={item.extra}>
              <Suspense fallback="...Loading">
                <item.component />
              </Suspense>
             
            </Route>

          ))}
        </Switch>
        </div>

      
        </div>
    )
}
export default Student