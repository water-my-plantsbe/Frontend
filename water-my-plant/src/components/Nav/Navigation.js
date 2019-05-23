import React from 'react';
import './Navbar.css';
import {Route, Link} from 'react-router-dom';
import Board from '../Dashboard/Board';

const Navbar = () => {
  return(
    <div>
      <nav class="navbar fixed-top navbar-dark bg-success">
        <a class="navbar-brand" href="#!">Water My Plants</a>
        <Link to="/dashboard"> Dashboard </Link>
      </nav>

        <Route path="/dashboard" exact component={Board}/> 
    </div>
  )
  
}

export default Navbar;
