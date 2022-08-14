import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {gql, useMutation} from '@apollo/client';

const ADD_JOB = gql`
mutation MyMutation($title: String, $catg: String, $desc: String) {
  insert_Jobs_one(object: {job_title: $title, job_category: $catg, job_description: $desc}) {
    job_title
    job_category
    job_description
    jobid
  }
}
`;

function PostaJob() {

  const [title, setTitle] = useState("");
  const [catg, setCatg] = useState("");
  const [desc, setDesc] = useState("");




    const [addJob, {loading, error, data }] = useMutation(ADD_JOB);

    if(loading)  return <p>Loading...</p>
    if(error)  return <p>error try again</p>

  

  return (

    <form
        onSubmit={e => {
          e.preventDefault();
          addJob({ variables: { title: title, catg: catg, desc: desc,} });
        }}
    >

      <label>Job Title
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label>Category
        <input 
          type="text" 
          value={catg}
          onChange={(e) => setCatg(e.target.value)}
        />
      </label>

      <label>Job Description
        <input 
          type="text" 
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </label>



      <input type="submit" />
    </form>
  )
}
export default PostaJob