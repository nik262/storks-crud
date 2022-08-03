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

//connecting to hasura console using admin password
//this is very very unsafe need to change this
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

    //<apolloprovide> wraps the app so that we can send and recieve state changes from our db(in hasura)
    <ApolloProvider client={client}>
    {/*router component is used so that we can have multi page functionality,
      you wrap the whole app with this router so that the functionality can work
     */}
    <Router>

     {/*
      this is the main div of the app can start styling from here
     */}
    <div className='App'>
      
      <h1 >I will stork</h1>

      {/*
        navigation component also needs styling, refer to ./components/navigation and style the html there for it to be affected here
     */}
      <Navigation></Navigation>

      <br />

      <Switch>
        <Route exact path="/">
          {/*
            home page component also needs styling refer to ./pages/home
          */}
          <Home />
        </Route>

        <Route path="/jobs">
          {/*
            jobs page needs styling but dont do it rn
          */}
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
