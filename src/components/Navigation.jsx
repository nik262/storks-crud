import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (

    <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/jobs">Jobs</Link>
    </li>
    <li>
      <Link to="/postajob">Post a Job</Link>
    </li>
   
  </ul>

  );
}

export default Navbar;