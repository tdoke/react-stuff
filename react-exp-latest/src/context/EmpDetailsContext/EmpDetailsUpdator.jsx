import { useContext } from 'react';
import { EmpDetailsContext } from './EmpDetailsContext';

export function EmpDetailsUpdator() {
    const { name, address, updateName, updateAddress } = useContext(EmpDetailsContext);
    return (<>
        name: <input value={name} onChange={e=> updateName(e.target.value)}/><br/>
        address: <input value={address} onChange={e=> updateAddress(e.target.value)}/><br/>
    </>);
}

