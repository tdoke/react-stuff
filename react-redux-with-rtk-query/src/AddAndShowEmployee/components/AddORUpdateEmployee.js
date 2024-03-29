import React, { useState, useEffect } from 'react';

const AddORUpdateEmployee = ({ saveEmployee, employeeToUpdate }) => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => { 
        if (employeeToUpdate) {
        setName(employeeToUpdate.name);
        setLocation(employeeToUpdate.location);
        }
    }, [employeeToUpdate])

    const handleSubmitBtnClick = () => {
        const emp = {
            name,
            location,
            ...(employeeToUpdate) ? { id: employeeToUpdate.id } : {}
        };
        saveEmployee(emp);
        setName("");
        setLocation("");
    };

    const handleSubmit = (e) => e.preventDefault();

    return (<>
    <form onSubmit={handleSubmit}>
        <div>
            name: <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            location: <input value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <button onClick={() => handleSubmitBtnClick()}>submit</button>
    </form>
    </>);
}
 
export default AddORUpdateEmployee;