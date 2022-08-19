import  * as React from 'react';
import {Link, Route, Routes, useRouteMatch} from 'react-router-dom'
import ViewJob from '../pages/ViewJob';


import {useQuery,  } from '@apollo/client';
import gql from 'graphql-tag';


// this is the GRAPHQL QUERY TO GET THE JOB TITLE AND JOB CATEGORY
const JOBS = gql`
query Search {
  Jobs {
    jobid
    job_title
    job_category
  }
}`;





function Jobs() {

  //THIS IS WHERE IT QUERIES IT 
  const {loading, error, data } = useQuery(JOBS);
  const { path, url } = useRouteMatch();

  if(loading)  return <p>Loading...</p>
  if(error)  return <p>error try again</p>



  // MAPS QUERY RESULTS AND MAKES THE ui (using html) 
  return data.Jobs.map(({jobid, job_title, job_category}) => (


      

      <div>
        
        
        <ul>
        
          <li key={jobid}>

          <Link to={`${url}/${jobid}`}>

          <p>{job_title}</p> | <span>{job_category}</span>  

          </Link>
          </li>
        </ul>

        <Route path={`${path}/${jobid}`}>
          <ViewJob/>
        </Route>
      </div>




  ));
  
    }

export default Jobs