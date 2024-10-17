import React from 'react'
import Counter from './counter'
import Todos from './todo'
import Navbar from './navbar'
import { Outlet } from 'react-router'
function App() {
  return (
    <div class="App">
      <Navbar></Navbar>
    <Outlet></Outlet>
    
    </div>
  )
}

export default App