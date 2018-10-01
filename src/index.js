import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { call, put } from 'redux-saga/effects';

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
            return [...state, action.payload];
        case 'SET_ELEMENTS':
            // console.log(action.payload); // Totally returns all the stuff from the server.
            return action.payload;
        default:
            return state;
    }
};

function* fetchElements(){
    try{
        const elementsResponse = yield call(() => axios.get('/element'));
        yield put({ type: 'SET_ELEMENTS', payload: elementsResponse});
    } catch (error){
        console.log('fetchElements', error)
    }
}

const storeInstance = createStore(
    combineReducers({
        firstReducer,
        secondReducer,
        elementListReducer,
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();