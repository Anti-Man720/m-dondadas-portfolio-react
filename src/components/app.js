import React, {Component} from 'react';
import moment from 'moment';

import PortfolioContainer from "./portfolio/portfolio-container";
export default class App extends Component {
  render() {
    return (
      <div className="app">
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
