import React from "react";
import { useFormik } from "formik";
 function Forms(){
var Studentform=useFormik({
    initialValues:{
      firstname:"",
      lastname:"",
      age:"",
      number:" ",
      email:"",
      select:'',
      
    },
    onSubmit:(values)=>{
        console.log(values);  

    }
  })          
  return (
        <>

       <form onSubmit={Studentform.handleSubmit} >  
        <center>
        <input type="text" class="form-control w-25 m-2 input1" {...Studentform.getFieldProps('firstname')} placeholder="firstname"  />

<input type="text" class="form-control w-25 m-2 input2"  name='lastname' {...Studentform.getFieldProps('lastname')} placeholder="lastname" />

<br />
    <input class="form-control" style={{width:"10%"}} type="text" name="age"  {...Studentform.getFieldProps('age')} placeholder='age' />
    <br />

<input type="text" class="form-control w-25 m-2 input1" name='number'  {...Studentform.getFieldProps('number')} placeholder="Number" />
<br />
<input type="text" class="form-control w-25 m-2 input2"  name='email' {...Studentform.getFieldProps('email')}  placeholder="Email"  />
    <button class="btn btn-success " style={{width:"10%"}} type="submit">Register</button>
 <br />
    <button  type="submit" class="btn btn-success m-2" onClick={()=>{Studentform.setValues({firstname:'surendra',
        lastname:'kumar',
        age:'23',
        number:'6300186812',
        email:'perumallasurendra12345@gmail.com',
    })}}>set values</button>
    <br />
    <button type="submit" class="btn btn-danger" onClick={()=>{Studentform.resetForm()}}>reset</button>
    </center> 
  </form>

      </>  
  )
}
export default Forms     

