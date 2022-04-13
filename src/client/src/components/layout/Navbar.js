import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <Fragment>
        <ul>
          <li className="nav-item"><Link className="nav-link" to="/">Launchpad list</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/1verify">Create launchpad</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/createToken">Create token</Link></li>
        
        </ul>
      </Fragment>
      
    </nav>
  );
};

export default Navbar;
