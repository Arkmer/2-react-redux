import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const firstReducer = (state = 0, action) => {
    if(action.type === 'BUTTON_ONE'){
        console.log('Reducer #1', state);
        return state + 1;
    }
    return state;
};

const secondReducer = (state = 100, action) => {
    if(action.type === 'BUTTON_TWO'){
        console.log('Reducer #2', state);
        return state - 1;
    }
    return state;
};

const elementListReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_ELEMENT':
            return [...state, action.payload]
        default:
            return state;
    }
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