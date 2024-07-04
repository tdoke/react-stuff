import { useState } from "react";

const ShowNum = ({ num }) => {
    return (<>{num}</>);
}

export const RenderListWithoutKeys = () => {
    const [list, setList] = useState([1, 2, 3, 4, 5])
    const numlist = list.map(num => <ShowNum num={num} />)

    return (<>
        {numlist}
        <button onClick={() => setList([1, 4, 5, 6, 7, 8])}>Delete 2,3 Add 6,7,8</button>
    </>)
}