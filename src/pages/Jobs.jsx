import  React from 'react';
import {useQuery,  } from '@apollo/client';
import gql from 'graphql-tag';


const JOBS = gql`
query Search {
  Jobs {
    job_title
    job_category
  }
}`;





function Jobs() {

  const {loading, error, data } = useQuery(JOBS);

  if(loading)  return <p>Loading...</p>
  if(error)  return <p>error try again</p>

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