import React, {Component} from 'react';
import moment from 'moment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container";
import Home from './pages/home';
import About from './pages/about';
import Blogs from './pages/blog';

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
              <Route path="/blogs" component={Blogs} />
            </Switch>

          </div>
        </Router>
        

         

        <h1>The Don-Dada Portfolio</h1>
        <h2>Valhalla We In Here!!</h2>
        <h3>Now can you DIG That?! Mutha F***ah! ~Sam 'booker t' Jackson~</h3>
        
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
        <PortfolioContainer />
      </div>
    );
  }
}
