import React from 'react'
import { connect } from 'react-redux'

function Todos(props) {

 
  return <div class="text-center">
    <h1>Todolist</h1>
    <input type="text"  id="d1"/>
    <button class="btn btn-success m-2"  onClick={()=>{props.dispatch({type:'ADD',payload:document.getElementById('d1').value})}}>Add</button>
      {
        props.todoreducer.todo.map((d)=>{
          return <ul >
             <li style= {{listStyle:"none"}}>{d} <button class="btn btn-danger" >delete</button></li>
          </ul>
           

        })
}
      
      </div>
   
  
}
export default connect(store=>store) (Todos)