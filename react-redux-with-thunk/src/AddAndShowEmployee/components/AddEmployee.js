import React, { useState } from 'react';

const AddEmployee = ({ saveEmployee }) => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmitBtnClick = () => {
        const emp = {
            name,
            location
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
 
export default AddEmployee;