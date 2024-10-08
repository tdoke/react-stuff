import { memo, useMemo, useState } from "react";

const Todo = ({ todo }) => {
    console.log("render todo");
    return (<>{todo}</>);
}
const Count = ({ count }) => {
    console.log("render count");
    return (<>{count}</>);
}
const Profile = ({ profile }) => {
    console.log("render profile");
    return (<>{JSON.stringify(profile)}</>);
}
const MemoizedProfile = memo(Profile, (prevProps, nextProps) => {
    return (prevProps.profile.fname === nextProps.profile.fname &&
        prevProps.profile.lname === nextProps.profile.lname)
})

const FamilyMembers = ({ familyMembers }) => {
    console.log("render familyMembers");
    return (<>{JSON.stringify(familyMembers)}</>);
}



export const RenderOnPropsChange = () => {
    const [todo, setTodo] = useState("");
    const [count, setCount] = useState(0);
    const [profile, setProfile] = useState({
        fname: '',
        lname: ''
    });
    const [familyMembers, setFamilyMembers] = useState([]);

    const memoizedTodo = useMemo(() => <Todo todo={todo} />, [todo]);
    return (<>
        <button onClick={() => setTodo("todo1")}>updateTodo</button>
        <button onClick={() => setCount(1)}>updateCount</button>
        <button onClick={() => setProfile({ fname: 'trushant', lname: 'doke' })}>updateProfile</button>
        <button onClick={() => setFamilyMembers(['mother', 'father', 'daughter', 'wife'])}>updateFamilyMembers</button>
        <br />
        {/* <Todo todo={todo} /> */}
        {memoizedTodo}
        <br />
        <Count count={count} />
        <br />
        {/* <Profile profile={profile} /> */}
        <MemoizedProfile profile={profile} />
        <br />
        <FamilyMembers familyMembers={familyMembers} />
    </>);
}

/**
 * 1] When setProfile, setFamilyMembers is called, every time, they set new object/array reference on state.
 * 2] Due to this each time  setProfile, setFamilyMembers is called, all child components are re-rendered.
 */