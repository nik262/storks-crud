import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { Switch, BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import PostaJob from './pages/PostaJob'




function App() {
  return (
    <Router>
    <div className='App'>
      
      <h1 >I will stork</h1>
      <Navigation></Navigation>

      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/jobs">
          <Jobs />
        </Route>

        <Route path="/postajob">
          <PostaJob />
        </Route>
        

      </Switch>
    </div>
  </Router>
    
  );
}

export default App;
