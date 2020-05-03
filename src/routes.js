import React from "react";
import { Route } from "react-router-dom";
// import { IndexRoute } from "react-router"
import Homepage from './Components/Homepage';
import SearchPage from './Components/SearchPage';
import Login from './Components/login';
import User from "./Components/User";
import ImageModal from "./Components/ImageModal";
import Download from "./Components/Download";

const BaseRouter = () => (
  <div>
       <Route exact path="/" component={Homepage} />
         {/* <IndexRoute component={Homepage} /> */}
      <Route path="/searchPage:result" component={SearchPage} />
            {/* <Route path=":search" component={Myfavorite} /> */}
        {/* </Route> */}
      <Route path="/login" component={Login} />
      <Route path="/user" component={User} />
      <Route path="/Myfavorite" component={ImageModal} />
      <Route path="/user_dowmlaod:fileId" component={Download} />



    {/* <Route exact path="/" component={ArticleList} />{" "}
    <Route exact path="/articles/:articleID/" component={ArticleDetail} />{" "}
    <Route exact path="/login/" component={Login} />{" "}
    <Route exact path="/signup/" component={Signup} />{" "} */}
  </div>
);

export default BaseRouter;