import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return <nav className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-3 ">
        <h1 href="/" className='d-flex align-items-center mb-3 mb-md-0 me-md-auto'>
        <span className="fs-4 ">Edupoly</span>
        </h1>
        &nbsp; &nbsp; &nbsp;
        <ul className="nav nav-pills p-2">
         <h6 className="nav-item"> <Link to='/a' >counter</Link></h6>
          &nbsp;  &nbsp; &nbsp;
        <h6 className="nav-item">  <Link to='/b' >todo</Link></h6>
          &nbsp; &nbsp; &nbsp;
          <h6 className="nav-item" ><Link  to="/c">products</Link></h6>
          &nbsp; &nbsp; &nbsp;
        <h6 className="nav-item">  <Link to="/d">cart</Link></h6>
        </ul>
        
      </header>
  </nav>
    
  
}

export default Navbar