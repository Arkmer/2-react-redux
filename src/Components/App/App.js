import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.dispatch({type: 'BUTTON_ONE'})}>Button One</button>
      </div>
    );
  }
}

export default connect()(App);
