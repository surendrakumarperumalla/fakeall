import './App.css';
import { Formik,Form, Field } from 'formik';
import * as Yup  from 'yup';
import Forms from './forms';
 function Employee(){
  // var validationSchema= Yup.object({  
  //   firstName: Yup.string().required('Required'),
  //   lastName: Yup.string().required('Required'),
    
  // })
 var initialValues={
    firstname:"",
    lastname:"",
    age:"",
    mobile:"",
    address:"",
    }
     var onSubmit=(values,{resetForm})=>{
      console.log(values);
        resetForm()
    }
  return <div>
    <h1 class="text-center">employee form</h1>
    <Formik initialValues={initialValues} onSubmit={onSubmit}  class="text-center">
      {(ef)=>{
        return <Form>
 
 <Field  class="form-control w-25" name="firstname" style={{border:"2px solid green"}} placeholder="firstname"></Field>
  <br />
  <br />
  <Field class="form-control w-25" name="lastname"  style={{border:"2px solid green"}}  placeholder="lastname"></Field>
  <br />
  <br />
  <Field type="number" class="form-control w-25" name="age" style={{border:"2px solid green"}}  placeholder="age"></Field>
  <br />
  <br />
  <Field type="number" class="form-control w-25" name="mobile" style={{border:"2px solid green"}}  placeholder="mobile" ></Field>
  <br />
  <br />
  <Field class="form-control w-25" name="address" style={{border:"2px solid green"}}  placeholder="address"></Field>
  <br />
  <br />
  <button class="btn btn-warning form-control" style={{width:"10%"}} > submit</button>
 
   
</Form>
}

 }
</Formik>
      <Forms></Forms>
   
  </div>
 }


export default Employee;
