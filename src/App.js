//import logo from './logo.svg';


import './App.css';


import * as React from "react";


import { Switch, BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";

import {
  ApolloProvider,
  ApolloClient,
  ApolloLink,
  
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";


import Navigation from './components/Navigation'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import PostaJob from './pages/PostaJob'

const client = new ApolloClient({
  cache : new InMemoryCache(),
  link : new HttpLink({ 
    uri: 'https://storks.hasura.app/v1/graphql',
    headers: {
      'x-hasura-admin-secret' : 'NOU1TtN17owJbgiNDsHCx5H6C4PmoqA3XOxNOZ0P8BuupviZqxnQJPuUH2jPFu6q'

    }
  
  })
})


function App() {
  return (
    <ApolloProvider client={client}>

    <Router>
    <div className='App'>
      
      <h1 >I will stork</h1>
      <Navigation></Navigation>

      <br />

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

    </ApolloProvider>
    
    
  );
}

export default App;
