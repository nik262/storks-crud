//import logo from './logo.svg';


import './App.css';


import * as React from "react";


import { Switch, BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";

import { Auth0Provider } from '@auth0/auth0-react';

import {
  ApolloProvider,
  ApolloClient,
  ApolloLink,
  
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";

//essential page related imports
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import PostaJob from './pages/PostaJob'

// login/logout page related imports
import LoginPage from './components/LoginPage'



const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientauth0 = process.env.REACT_APP_AUTH0_CLIENT;


//connecting to hasura console using admin password
//this is very very unsafe need to change this
// used a .env file to protect admin password but still not sure how safe this is 
const HASURA_SECRET = process.env.REACT_APP_HASURA_SECRET;

const client = new ApolloClient({
  cache : new InMemoryCache(),
  link : new HttpLink({ 
    uri: 'https://storks.hasura.app/v1/graphql',
    headers: {
      'x-hasura-admin-secret' : HASURA_SECRET

    }
  
  })
})


function App() {

  console.log("hello");

  return (

    <Auth0Provider
    domain = {domain}
    clientId={clientauth0}
    redirectUri={window.location.origin}
    >
    
    <ApolloProvider client={client}>
    {/*router component is used so that we can have multi page functionality,
      you wrap the whole app with this router so that the functionality can work
     */}
    <Router>

     {/*
      this is the main div of the app can start styling from here
     */}
    <div className='App'>

     

      <LoginPage></LoginPage>
      
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
    </Auth0Provider>
    
  );
}

export default App;
