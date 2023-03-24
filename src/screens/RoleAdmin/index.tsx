import { AdminRoute } from "components/config"
import Header from "components/Header"
import HeaderAdmin from "components/HeaderAdmin"
import SideBar from "components/SideBar"
import SideBarAdmin from "components/SideBarAdmin"
import React, { Suspense } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
const RoleAdmin = () => {
  return (
    <div>
      <HeaderAdmin />
      <SideBarAdmin />
      <main role="main" className="col-md-9 ml-sm-auto col-lg-9 px-md-4 AllContainer">

        <Switch>
          {AdminRoute.map(item => (
            <Route path={'/admin/' + item.path} key={item.path} exact={item.extra}>
              <Suspense fallback="...Loading">
                <item.component />
              </Suspense>

            </Route>

          ))}
        </Switch>
      </main>
    </div>

  )
}
export default RoleAdmin