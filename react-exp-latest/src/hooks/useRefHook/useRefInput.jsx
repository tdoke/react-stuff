import { useEffect, useRef, useState } from "react";

function RefExampeInput() {
    const [name, setName] = useState("");
    const inputElementRef = useRef(null);
    const handleNameChange = (e) => setName(e.target.value);
    useEffect(() => { 
        inputElementRef.current.focus();
        console.log("position", inputElementRef.current.getBoundingClientRect());
    }, []);

    return (<input ref={inputElementRef} value={name} name="name" onChange={handleNameChange} />);
}

export default RefExampeInput;