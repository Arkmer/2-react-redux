# Intro to React Redux
## Contents

## What is Redux?
Redux solves the issue of moving data all over your application. React is set up so that only childeren files can grab data from parents. This makes getting data from one low level page to another low level page very difficult. Redux is a way to pass the data directly to components without needing to be the parent; it is totally separate from the regular component tree.

### Redux Terms
- Redux State: This is similar to the React State, but has to do with Redux instead.
- Store: The big object that will hold all the information for the application.
- Reducer: A function that runs everytime a function is dispatched.

## Requirements
- npm
- react CLI commands
- VS code (or similar)

## Getting Started
1. Open the terminal
2. Navigate to the folder you want this in
3. use the comman `create-react-app [appName]` to create the app with your choice od name
4. `cd [appName]`
5. `npm i redux react-redux --save`
6. `code .`
7. `npm start`
This should open your app and install your things.

From here you should clean out the code that comes with the create command. Move the app file into `.src/Components/App` folder with it's .css file. App.js should return an empty div, delete the logo source in the app. App.css should be completely empty. Delete the logo file. Clear all code in index.css. Fix the sourcing in index.js to properly target App.js; should look like this `import App from './Components/App/App.js';`. Finally, delete the app test file.

Should be everything.

## Providing the Store with Redux
In your index.js you need:
```
import { createStore } from 'redux';

// This is creating the store.
const storeInstance = createStore(
    // This function is our first reducer.
    () => {
        console.log('Reducer Test!');
    },
);
```
Run it! It puts the thing in the console, yay.

Now import `Provider` from `'react-redux'` using deconstruction. Then we'll use Provider as a wrapper for the `<App />` in the render. This will cause all kinds of problems! To fix those problems we need to send our Provider tag some props in the form of `store={storeInstance}` this will give the entire app access to the store.

I say again: "This is how we **provide** the **store** to our react application." Got it? Great.

## Connecting the Store to App.js
We need to import a thing. Import `conect` from `react-redux`. Then we need to change that `export default` a bit. To add connect to it we need to do `connect()(App)`. This is currying from before, why is it here? To bind properly.

To show how this is working, create a button that when clicked runs `() => this.props.dispatch({type: 'BUTTON_ONE'})`. Open the console and click the button. Dispatch is something done for us, so don't worry where it comes from, but what it does is it triggers the store to run it's functions.

## More Buttons, More Reducers, More Fun
Create store only allows for one reducer. So we need to combine reducers. Let's import more stuff! Add `combineReducers` to your `createStore` import. It even autocompletes.

In your code, take the function within the `storeInstance` and move it outside the instnace under a `const firstReducer = [that function]`, now make a second reducer that does essentially the same thing. You should have an empty `storeInstance = createStore()` with two const reducer functions above it. Within that `createStore( here )`, put `combineReducers()`, this takes in an object so you'll put curlies in it as well. Within those curlies go the names of the reducers as properties to the object.

Your index.js should look like this:
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const firstReducer = () => {
    console.log('Reducer Test! #1');
};

const secondReducer = () => {
    console.log('Reducer Test! #2');
};

const storeInstance = createStore(
    combineReducers({
        firstReducer,
        secondReducer,
    })
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
```
Errors!!

The reducers as written now are not `returning` anything. Alter both so they return a hardcoded empty object (doesn't really matter what value right now). Now pressing the buttons will fire both reducered "properly".

Make a third reducer! This reducer will take in state and action. Console log action. Take a moment to figure out where this is coming from.

Hint: Use what has been built already.

It comes from the type in the App.js! We can use this to fire specific reducers when we want them using switch statements. Now that the reducers are separate and fire when the appropriate button is clicked, let's add some stuff!

### Variables in the Reducer
Let's create an input that when clicked will take in a string and console log it. You're going to have to add the property `payload` to the object where `type` is. The `payload` will be the string we want to `console.log` with the third reducer. If you're guessing how the reducer gets the payload just check your console. It comes right over with the type!

You should have all the tools to create this at this point if you've been through the ReactJS tutorial.

App.js
```
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
```

index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const firstReducer = (state, action) => {
    switch(action.type){
        case 'BUTTON_ONE'
            console.log('Button #1');
        default:
            return {};
    }
};

const secondReducer = (state, action) => {
    switch(action.type){
        case 'BUTTON_TWO'
            console.log('Button #2');
        default:
            return {};
};

const elementListReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ELEMENT'
            console.log('Element:', action.payload);
        default:
            return {};
};

const storeInstance = createStore(
    combineReducers({
        firstReducer,
        secondReducer,
        elementListReducer,
    })
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
```

For following along's sake, this is where you should be. We're moving elements.

Reducers 1 and 2 along with buttons 1 and 2 are pretty useless right now, but they've not yet been deleted so there they will remain.

## State
Slight deviation, we're going to talk about state now. We've been passing it into our reducers and basically just ignoring it. Let's take some steps here. Do these in reducer 1.
1. Console log it. Result?
2. Return it instead of the empty object. Result?
Okay, surely you got some resuts from both those actions. First you got undefined, then you got a crap ton of errors! Okay, the errors are because the state is undefined. Add `= 0` to the state that is being passed into the reducer so it looks like this `const firstReducer = (state = 0, action)`, errors resolved.

Now, inside the if function, add a new line `return state + 1;`.

Add the same things to the second reducer except instead of adding you are subtracting. What do you think the result will be?

From this small change you can see that each state is unique to the reducer! Additionally, we can see that the state that is passed in is the state from the previous time that state was called. Adding the `= 0` to the state input is ES6 for "if this is unidentified, it equals this".

### Storing things in the Redux State
Because we now know how the state works in redux we want to try to store things there so we can use them in our app later!

See if you can figure out how to do that!

Hint: Sort of like `setState` but without the `setState`.

index.js reducer answer
```
const elementListReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_ELEMENT':
            return [...state, action.payload]
        default:
            return state;
    }
};
```
If there is nothing in the state then state is an empty array. If something is in the state then the state is returned with whatever the payload was tagged onto it.