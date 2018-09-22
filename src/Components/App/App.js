import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.dispatch({type: 'BUTTON_ONE'})}>Button One</button>
        <button onClick={() => this.props.dispatch({type: 'BUTTON_TWO'})}>Button Two</button>
        <button onClick={() => this.props.dispatch({type: 'ADD_ELEMENT', payload: 'hydrogen'})}>Add Element</button>
      </div>
    );
  }
}

export default connect()(App);
