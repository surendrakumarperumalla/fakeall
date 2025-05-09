
import React from 'react';
import { Formik, Form, Field} from 'formik';  
import { useAddEmployeeMutation } from '../services/employeeApi';
import { useNavigate } from 'react-router-dom';
function AddEmployeeform() {
  var [AddEmpFn]= useAddEmployeeMutation();     
  var navigate = useNavigate()
  
  return (
    <div>
      <h1>Add employee form</h1>
    <Formik
      initialValues={{name:'', email: '', password: '' }}
      onSubmit={(values) => {
        console.log(values);
        AddEmpFn(values)
        navigate('/h')
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" />
          <br />
           <br />
          <Field type="text" name="email" />
            <br />
            <br />
            <Field type="text" name="password" />
            <br />
            <br />
          <button type="submit" class="btn btn-success"> Submit</button>
        </Form>
      )}
    </Formik>
  </div>
  )
}

export default AddEmployeeform


