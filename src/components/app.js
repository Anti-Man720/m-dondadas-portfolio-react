import React, { Component } from "react";
import moment from "moment";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blogs from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import NoMatch from "./pages/no-match";
import PortfolioContainer from './portfolio/portfolio-container';

export default class App extends Component {


  
  
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavigationContainer />
            
            
          
        
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blogs} />
          
              <Route
                exact
                path="/portfolio/:slug"
                component={PortfolioDetail}
                />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
        
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
      </div>

    );
  };
}
  

        
        
        


