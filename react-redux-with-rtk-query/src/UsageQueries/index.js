import { useState } from "react";
import { patchQueries } from "../rtkQueryApi";
import { countriesQueries } from './queries';

const {
    useGetCompaniesQuery
} = patchQueries(countriesQueries);

const UseQueries = ({ queryInput }) => {
    const { isError, isLoading, isFetching, data = [], refetch } = useGetCompaniesQuery(queryInput, {
        refetchOnMountOrArgChange: true,
        skip: false
    });
    if (isError) {
        console.log("error fetching countries");
        return <div>error fetching countries</div>
    }
    if (isFetching) {
        console.log("fetching countries");
        return <div>fetching countries</div>
    }
    if (isLoading) {
        console.log("loading");
        return <div>loading...</div>
    }
    console.log(data);

    return (<>
        <>
            <ul>
                {
                    data.map(({ id, name }) => <li key={id}>{name}</li>)
                }
            </ul>
        </>
        <button onClick={refetch}>REFETCH</button>
    </>);
}

const Container = () => {
    const [mountcomp, toggleMount] = useState(true);
    const [input, setInput] = useState(0);

    return (<>
        {mountcomp && <UseQueries queryInput={undefined} />}
        <button onClick={() => toggleMount(mflag => !mflag)}>{mountcomp ? 'unmount' : 'mount'}</button>
        <input value={input} onChange={(e) => setInput(e.target.value)}/>
    </>)
}

export default Container