import React, {Component} from 'react';
import moment from 'moment';
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>The Don-Dada Portfolio</h1>
        <h2>Can you Dig it? Suckaaahh</h2>
        <h3>Bitch we In Here!!</h3>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
