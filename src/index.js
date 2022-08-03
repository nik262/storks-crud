import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




/*
const httpLink = new HttpLink({ uri: 'https://storks.hasura.app/v1/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: 'x-hasura-admin-secret NOU1TtN17owJbgiNDsHCx5H6C4PmoqA3XOxNOZ0P8BuupviZqxnQJPuUH2jPFu6q',
    }
  }));

  return forward(operation);
})


const client = new ApolloClient({
  cache : new InMemoryCache(),
  link : ({ uri: 'https://storks.hasura.app/v1/graphql' })
})
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
    <App />
  </React.StrictMode>
 
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
