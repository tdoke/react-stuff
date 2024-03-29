import React, { useState } from 'react';
import { useEffect } from 'react';

const AddCompany = ({ addNewCompanyMutation, updateCompanyMutation, companyToUpdate }) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const resetForm = () => {
        setName("");
        setAddress("");
    };

    const handleSubmitBtnClick = (e) => {
        e.preventDefault();
        if (!companyToUpdate) {
            addNewCompanyMutation({ name, address });
        }
        if (companyToUpdate) {
            updateCompanyMutation({ ...companyToUpdate, name, address });
        }
        resetForm();
    };

    useEffect(() => {
        if (companyToUpdate) {
        resetForm();
        const { name, address } = companyToUpdate;
        setName(name);
        setAddress(address);
        }
    }, [companyToUpdate]);

    return (<>
        <form onSubmit={handleSubmitBtnClick}>
            <h1>{companyToUpdate ? 'Update' : 'Add'} company</h1>
            <div>
                name: <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                address: <input value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <button>{companyToUpdate ? 'Update' : 'Add'} Company</button>
        </form>
    </>);
}

export default AddCompany;