
import './App.css';
import { Formik, useFormik,Form, Field } from 'formik';
 function Employee(){
  return <div>
    <h1>employee form</h1>
    <Formik 
    initialValues={{
    firstname:"",
    lastname:"",
    age:"",
    mobile:"",
    address:"",
    }}
    onSubmit={(values)=>{
      console.log(values);
    }} 
>
<Form>
  <Field type="text" name="firstname"></Field>
  <Field type="text" name="lastname "></Field>
  <Field type="text" name="age"></Field>
  <Field type="text" name="mobile"></Field>
  <Field type="text" name="address"></Field>
  <button type="submit" > submit</button>
  
</Form>

</Formik>
  </div>
 }


export default Employee;
