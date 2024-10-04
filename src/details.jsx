import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
function Details() {
  var[x,setX]=useState([]);
  var Studentform=useFormik({
    initialValues:{
      firstname:"",
      lastname:"",
      age:"",
      number:" ",
      email:"",
      select:'',
      
    },
    validationSchema:Yup.object({
      firstname:Yup.string().required('please fill the first name'),
      lastname:Yup.string().required('last name is mandatory'),
      age:Yup.number().required('age is required'),
      number:Yup.number().required('enter the number'),
      email:Yup.string().email('invalid email address').required('email should mandatory'),


    }),
    
    onSubmit:(values)=>{
        console.log(values);  
        setX([...x,values])
    }
  }) 
        function dd(i){
          x.splice(i,1)
           setX([...x])
        }  
             function ab(){
              x.sort((a,b)=>{
               
                if(a.firstname>b.firstname){
                  return 1;
                }
                else{
                  return -1;
                }
              })
              setX([...x])
             }
  return (
        <>
       <form onSubmit={Studentform.handleSubmit} >   
            <div class="input-group mb-3 w-50 p-5">
  <input type="text" class="form-control w-25 m-2 input1" name='firstname'  onChange={Studentform.handleChange} onBlur={Studentform.handleBlur} placeholder="firstname"  />
  <div>{Studentform.touched.firstname && Studentform.errors.firstname}</div>
  <br />
  <input type="text" class="form-control w-25 m-2 input2"  name='lastname' onChange={Studentform.handleChange}  onBlur={Studentform.handleBlur} placeholder="lastname" />
  <div>{Studentform.touched.lastname && Studentform.errors.lastname}</div>

</div>
<br />
      <input class="form-control" style={{width:"10%"}} type="text" name="age" onChange={Studentform.handleChange}  onBlur={Studentform.handleBlur} placeholder='age' />
      <div>{Studentform.touched.age && Studentform.errors.age}</div>
      <br />
      <br />
      
 <div class="input-group mb-3 w-50 p-5">
  <input type="text" class="form-control w-25 m-2 input1" name='number'  onChange={Studentform.handleChange} onBlur={Studentform.handleBlur} placeholder="Number" />
  <div>{Studentform.touched.number && Studentform.errors.number}</div>
  <br />
  <input type="text" class="form-control w-25 m-2 input2"  name='email' onChange={Studentform.handleChange}  onBlur={Studentform.handleBlur}  placeholder="Email"  />
  <div>{Studentform.touched.email && Studentform.errors.email}</div>
</div>
      <br />
      <select name="select" onChange={Studentform.handleChange} class="form-select" style={{width:"25%"} }     >
        <option name=" select" onChange={Studentform.handleChange} value="please select" selected>please select</option>
        <option name="select"  onChange={Studentform.handleChange} value="student">student</option>
        <option name="select" onChange={Studentform.handleChange} value="employee">employee</option>
        <option  name="select" onChange={Studentform.handleChange} value="others">others</option>
      </select>
      <br />
      <br />

      <button class="btn btn-success " style={{width:"10%"}} type="submit">Register</button>
  </form>

      <div>
      <table class=" table text-white " border="2px solid" cellPadding="10px" cellSpacing="10px">
           <tr className='d-flex  justify-content-evenly text-white p-3'>
           <th onClick={()=>{ab()}}>firstname</th>
           <th>lastname</th>
           <th>number</th>
           <th>email</th>
             <th>select</th>
             <th>Delete</th>
              </tr>
              {
               x?.map((h,i)=>{
                   return <tr className='d-flex  justify-content-evenly text-white p-3' >
                       <td>{h.firstname}</td>
                       <td>{h.lastname}</td>
                       <td>{h.number}</td>
                       <td>{h.email}</td>
                       <td>{h.select}</td>
                       <button class="btn btn-danger "  onClick={()=>{dd(i)}}>delete  </button>
                      </tr>
           
          })
        }
         </table>
      </div>
        
      </>  
  )
          
}

export default Details