import { useState } from "react";

export const RenderOnStateChange = () => {
    const [todo, setTodo] = useState("");
    const [count, setCount] = useState(0);
    const [profile, setProfile] = useState({
        fname: '',
        lname: ''
    });
    const [familyMembers, setFamilyMembers] = useState([]);
    console.log('rendering');
    return (<>
        <button onClick={() => setTodo("todo1")}>updateTodo</button>
        <button onClick={() => setCount(1)}>updateCount</button>
        <button onClick={() => setProfile({ fname: 'trushant', lname: 'doke' })}>updateProfile</button>
        <button onClick={() => setFamilyMembers(['mother', 'father', 'daughter', 'wife'])}>updateFamilyMembers</button>
    </>);
}

/** 
 * 1] When setProfile, setFamilyMembers is called, ever time, they set new object/array reference on state.
 *    Thus useState returns a new reference, component is rerendered each time when setProfile / setFamilyMembers are called.
 *    even though content of profile , familyMembers state remains same.
*/