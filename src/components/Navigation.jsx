import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (

    <nav>

      <a href="/">Storks</a>

      <ul>
        <li> 
          <a href="/jobs">Jobs</a>
        </li>
        <li> 
        <a href="/postajob">Post a Job</a>
        </li>

      </ul>

    </nav>
    

  );
}

export default Navbar;