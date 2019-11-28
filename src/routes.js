import React from "react";
import { Route } from "react-router-dom";

import Homepage from './Components/Homepage';
import SearchPage from './Components/SearchPage';
import Login from './Components/login';

const BaseRouter = () => (
  <div>
       <Route exact path="/" component={Homepage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/login" component={Login} />
    {/* <Route exact path="/" component={ArticleList} />{" "}
    <Route exact path="/articles/:articleID/" component={ArticleDetail} />{" "}
    <Route exact path="/login/" component={Login} />{" "}
    <Route exact path="/signup/" component={Signup} />{" "} */}
  </div>
);

export default BaseRouter;