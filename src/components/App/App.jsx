import React from 'react';
import axios from 'axios';
import './App.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
"react-router-dom";
import { useDispatch } from 'react-redux';
//component import
import Header from '../Header/Header';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understand';

function App() {

  useEffect(() => {
    console.log('load upon booting')
    grabDatabase();
  }, [])
  const dispatch = useDispatch(); 

  //setting default states for all of the values sent to the reducer
  const feedBackReducer = (state = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: 'Yolo'
  }, action) => {
    switch (action.type) {
      case "USER_FEELING":
      case "USER_SUPPORT":
      case "USER_UNDERSTANDING":
      case "USER_COMMENTS":
        return action.payload;
    }
    return state;
  }
  const grabDatabase = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    })
    .then((response) => {
      dispatch({
        type: 'GRAB_DB',
        payload: response.data
      })
    })
    .catch ((err) => {
      console.log('Err in GET', err)
    })
  }

  return (
    <div className='App'>
      <Router>

      <Header />
        <Route path="/" exact>
          <Feeling />
        </Route>
        <Route path="/understanding" exact>
         <Understanding />
        </Route>
        <Route path="/support" exact>
          <Support />
        </Route>
        <Route path="/comments" exact>
          <Comments />
        </Route>

      </Router>
      </div>
    
  );
}

export default App;
