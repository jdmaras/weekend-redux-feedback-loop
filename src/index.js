import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

import registerServiceWorker from './registerServiceWorker';


//Get to grab from database for the admin page
const dataBaseInfo = (state = [], action) => {
    switch (action.type) {
        case "GRAB_DB":
            return action.payload;
    }
    return state;
}

const store = createStore(
    combineReducers({
    dataBaseInfo
    }),
    applyMiddleware(logger)
);



ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
