import React, { useState } from 'react';

const AddCompany = ({ addNewCompanyMutation }) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const handleSubmitBtnClick = (e) => {
        e.preventDefault();
        addNewCompanyMutation({ name, address });
        setName("");
        setAddress("");
    };

    return (<>
        <form onSubmit={handleSubmitBtnClick}>
            <h1>add company</h1>
            <div>
                name: <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                address: <input value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <button>Add Company</button>
        </form>
    </>);
}

export default AddCompany;