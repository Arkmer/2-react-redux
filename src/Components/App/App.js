import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newElement: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      newElement: event.target.value,
    });
  }

  handleClick = () => {
    this.props.dispatch({type: 'ADD_ELEMENT', payload: this.state.newElement});
    this.setState({
      newElement: '',
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.dispatch({type: 'BUTTON_ONE'})}>Button One</button>
        <button onClick={() => this.props.dispatch({type: 'BUTTON_TWO'})}>Button Two</button>
        <input value={this.state.newElement} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Add Element</button>
      </div>
    );
  }
}

export default connect()(App);
