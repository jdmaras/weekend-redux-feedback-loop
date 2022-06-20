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

  //setting default states for all of the values sent to the reducer
  const feedBackReducer = (state = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: 'Yolo'
  }, action) => {
    switch (action.type) {
      case "USER_FEELING":
        return {...state, feeling: action.payload}
      case "USER_UNDERSTANDING":
          return {...state, support: action.payload}
      case "USER_SUPPORT":
        return {...state, understanding: action.payload}
      case "USER_COMMENTS":
        return {...state, comments: action.payload}
      case "RESET_FEEDBACK":
        return {}
      //just give the review page a type and not a payload
    }
    return state;
  }

const store = createStore(
    combineReducers({
    feedBackReducer,
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
