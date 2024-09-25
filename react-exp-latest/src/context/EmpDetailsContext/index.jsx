import { useState, useMemo, useCallback } from 'react';
import { EmpDetailsContext } from './EmpDetailsContext';
import { EmpDetailsUpdator } from './EmpDetailsUpdator';

export function EmpDetais() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const updateName = useCallback((name) => setName(name), []);
    const updateAddress = useCallback((address) => setAddress(address), []);

    const contextValue = useMemo(() => ({
        name,
        address,
        updateName,
        updateAddress
    }), [name, address, updateName, updateAddress]);

    return (<>
        name: {name}<br />
        address: {address}<br /><br /><br /><br />
        <EmpDetailsContext.Provider value={contextValue}>
            <EmpDetailsUpdator />
        </EmpDetailsContext.Provider>
    </>);
}

export default EmpDetais;