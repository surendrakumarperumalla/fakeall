
import { useGetEmployeesQuery } from '../services/employeeApi'
import { Link } from 'react-router-dom';
function Employee() {
var {isLoading,data}=useGetEmployeesQuery()
console.log(data);
  return (
    <div>
      <h1>EMPLOYEEHOME</h1>
      <Link to='/Add' className='btn btn-success'>Add employees</Link>
      {
        isLoading && <b>loading....</b>
      }
      {
        !isLoading &&
        <ul class="list-unstyled">
          {
          data.map((emp)=>{
            return<div>
            <li>NAME:{emp.name}</li>
            <br/>
            <li >EMAIL:{emp.email}</li>
            <br/>
            <li>PASSWORD:{emp.password}</li>

      </div>

          })
        }
        </ul>
      }
    </div>
  )
}

export default Employee