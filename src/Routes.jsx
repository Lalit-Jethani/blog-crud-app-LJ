
import './App.css';
import React from 'react'
import App from './App';
import {useSelector } from 'react-redux';
import Fallback from '../src/FallBack';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import PostList from './containers/postList';
import Header from './components/Header';
function Routes() {

const isError = useSelector(state => state.blogReducer.isError)
  
    
    if(isError) {
        return <Fallback/>
      }
  
  return (

    <div className="App">
      <Router>
       <Header />
        <Switch>
          <Route exact path="/"><App/></Route>
          <Route exact path="/FullPost/:id"><PostList/></Route>
        </Switch>
      </Router>
    </div>
    
   
  );
}

export default Routes; 
