import React from 'react';
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">Furama</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><Link to={`/`} className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to={`/service`} className="nav-link">Service</Link></li>
            <li className="nav-item"><Link to={`/customer`} className="nav-link">Customer</Link></li>
            <li className="nav-item"><Link to={`/contract`} className="nav-link">Contract</Link></li>
            <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
            <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;