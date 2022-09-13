import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "../categoryBike/Home";
import AboutCategory from "../categoryBike/AboutCategory";
import Delivery from "../components/delivery/Delivery";
import Contact from "../components/contact/Сontacts";
import Personal from "../components/personal/Personal";
import OrderBike from "../components/bike/orderBike/OrderBike";
import Ride from "../components/ride/Ride";
import ActivePersonal from "../components/personal/activePersonal/ActivePersonal";


const Router = () => {
    const mjk = window.location.href.split("/");
    const urlEnd = window.location.href.split("/");

    return (
      <>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={AboutCategory}/>
          <Route exact path='/delivery' component={Delivery}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/personal' component={Personal}/>
          <Route exact path='/ride' component={Ride}/>
          <Route exact path='/orderBike' component={OrderBike}/>
          <Route exact path={`//account/activate/${mjk[mjk.length-2]}/${urlEnd.pop()}`} component={ActivePersonal}/>
      </Switch>
      </>
    );
};

export default Router;