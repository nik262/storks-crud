import  React from 'react';
import {useQuery,  } from '@apollo/client';
import gql from 'graphql-tag';

// this is the GRAPHQL QUERY TO GET THE JOB TITLE AND JOB CATEGORY
const JOBS = gql`
query Search {
  Jobs {
    job_title
    job_category
  }
}`;





function Jobs() {

  //THIS IS WHERE IT QUERIES IT 
  const {loading, error, data } = useQuery(JOBS);

  if(loading)  return <p>Loading...</p>
  if(error)  return <p>error try again</p>

  // MAPS QUERY RESULTS AND MAKES THE ui (using html) 
  return data.Jobs.map(({jobid, job_title, job_category}) => (

    <div key={jobid}>

      <div>
      <p>{job_title}</p> 
      <sub>{job_category}</sub>
      </div>

    </div>

  ));
  
    }

export default Jobs