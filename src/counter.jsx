import React from 'react'
import { connect } from 'react-redux';


function Counter(props,dispatch) {
    console.log(props);
  return (
    <center>
        <div class=" text-center  ">
    <h1>count:{props.counterreducer.count}</h1>
     <button className="btn btn-success m-2" onClick={()=>{props.dispatch({type:'INC'})}}> increement</button>
     <button className="btn btn-success m-2"  onClick={()=>{props.dispatch({type:'DEC'})}}>decreement</button>
     <button className="btn btn-success m-2"  onClick={()=>{props.dispatch({type:'RES'})}}>reset</button>
    </div>
    </center>
  )  
  
}

export default connect(store=>store) (Counter);