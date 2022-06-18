import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import { Provider } from "react-redux";
// import { createStore, combineReducers, applyMiddleware } from "redux";
// import logger from "redux-logger";

import registerServiceWorker from './registerServiceWorker';

// const store = createStore(
//     combineReducers({

//     })
//     applyMiddleware(logger)
// );


//--------- DON'T FORGET PROVIDER
ReactDOM.render(
    <App />
    , document.getElementById('root'));
registerServiceWorker();
