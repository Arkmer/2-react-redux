import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import axios from 'axios';

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
    axios.post('/element', this.state) // POST
    .then(() => {
      axios.get('/element') // GET
      .then(response => {
        this.props.dispatch({ // Set State
          type: 'SET_ELEMENTS',
          payload: response.data
        })
      })
      .catch(error => {
        console.log('GET', error);
      })
    })
    .catch(error => {
      console.log('POST', error);
    })

    // set state to get request response
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
        <pre>{JSON.stringify(this.props.reduxState)}</pre>
      </div>
    );
  }
}

const mapReducStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReducStateToProps)(App);

// Bacon!!