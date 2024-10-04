import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (<div class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light nv">
  <div class="container-fluid">
    <Link className="navbar-brand hh" to=""><h3 style={{color:"forestgreen"}}>Home</h3></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item  ">
         <Link className="nav-link hh " to="ff"><h3  style={{color:"forestgreen"}}>Features</h3></Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link hh" to="pp"><h3 style={{color:"forestgreen"}}>Pricing</h3></Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link hh " to="aa"><h3 style={{color:"forestgreen"}}>Aboutus</h3></Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link hh" to="dd"><h3 style={{color:"forestgreen"}}>Details</h3></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  )}

export default Navbar