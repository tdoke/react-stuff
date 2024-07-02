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