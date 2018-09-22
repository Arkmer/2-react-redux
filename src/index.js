import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const firstReducer = (state, action) => {
    if(action.type === 'BUTTON_ONE'){
        console.log('Button #1');
    }
    return {};
};

const secondReducer = (state, action) => {
    if(action.type === 'BUTTON_TWO'){
        console.log('Button #2');
    }
    return {};
};

const elementListReducer = (state, action) => {
        console.log('#3, action', action);
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