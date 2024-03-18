import React from 'react';

const ShowEmployee = ({ employees = [], deleteEmployee, setEmployeeToUpdateId }) => {

    return (<>
        <ol>
            {employees
                .map((emp) => <li key={emp.id}>
                    {`${emp.id}----${emp.name}-----${emp.location}`}
                    <button onClick={() => deleteEmployee(emp.id)}>delete</button>
                    <button onClick={() => setEmployeeToUpdateId(emp.id)}>update</button>
                </li>)}
        </ol>
    </>);
}
 
export default ShowEmployee;