import React from "react";
import { Route } from "react-router-dom";
// import { IndexRoute } from "react-router"
import Homepage from './Components/Homepage';
import SearchPage from './Components/SearchPage';
import Login from './Components/login';
import User from "./Components/User";
// import ImageModal from "./Components/ImageModal";
import Download from "./Components/Download";
import AboutUS from "./Components/AboutUS";
import Myfavorite from "./Components/Myfavorite"
 
const BaseRouter = () => (
  <div>
       <Route exact path="/" component={Homepage} />
         {/* <IndexRoute component={Homepage} /> */}
      <Route path="/searchPage:result:type" component={SearchPage} />
            {/* <Route path=":search" component={Myfavorite} /> */}
        {/* </Route> */}
      <Route path="/login" component={Login} />
      <Route path="/user" component={User} />
      <Route path="/favorite" component={Myfavorite} />
      <Route path="/myDownload" component={Download} />
      <Route path="/AboutUS" component={AboutUS}/>



    {/* <Route exact path="/" component={ArticleList} />{" "}
    <Route exact path="/articles/:articleID/" component={ArticleDetail} />{" "}
    <Route exact path="/login/" component={Login} />{" "}
    <Route exact path="/signup/" component={Signup} />{" "} */}
  </div>
);

export default BaseRouter;