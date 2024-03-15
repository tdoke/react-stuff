import React from 'react';

const ShowEmployee = ({ employees = [], deleteEmployee }) => {

    return (<>
        <ol>
            {employees
                .map((emp) => <li key={emp.id}>
                    {`${emp.id}----${emp.name}-----${emp.location}`}
                    <button onClick={() => deleteEmployee(emp.id)}>delete</button>
                </li>)}
        </ol>
    </>);
}
 
export default ShowEmployee;