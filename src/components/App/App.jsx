import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";

//component import
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understand';

function App() {

  return (
    <div className='App'>
      <Router>
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
