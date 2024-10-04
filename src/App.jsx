import './App.css';
import Footer from './footer';
import Navbar from './navbar';
import { Outlet } from 'react-router';
import React from 'react';

function App() {
 

  return (
    <div class="w-100" >
       <Navbar/>
       <center>
       <Outlet></Outlet>
       </center>
       {/* <Footer></Footer> */}
    </div>
  );
}

export default App;