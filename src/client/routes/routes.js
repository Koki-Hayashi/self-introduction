import React from "react";
import {IndexRoute, Route} from "react-router";
import * as pages from "../pages/index";

const routes = (
    <Route path="/" component={pages.Root}>
      <IndexRoute component={pages.Home}/>
	  <Route path="home" component={pages.Home}/>
      <Route path="*" component={pages.NotFound}/>
    </Route>
);

export default routes
