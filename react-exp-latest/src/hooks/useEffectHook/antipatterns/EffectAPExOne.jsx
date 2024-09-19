import { useEffect, useState } from "react";

const resp_players = [{ id: 1, name: 'Rohit' }, { id: 2, name: 'Virat' }, { id: 3, name: 'Bumrah' }, { id: 4, name: 'Siraj' }, { id: 5, name: 'Rishabh' }];
const resp_defaultSelected = 1;
function EffectAPExOne() {
    const [players, setPlayers] = useState([]);
    const [selected, setSelected] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setPlayers(resp_players);
            setAndTagSelectedValue(resp_defaultSelected);
        }, 2000);
     }, []);

     /*
     ----->BAD
     useEffect(() => {
        console.log("taging call------------->", selected);
     }, [selected]);
     */
    const setAndTagSelectedValue = (selectedValue) => {
        setSelected(selectedValue);
        console.log("taging call------------->", selectedValue);
    };
    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setAndTagSelectedValue(selectedValue);
    }

    return (<>{<select value={selected} onChange={handleSelectChange}>{players.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}</select>}</>);
}

export default EffectAPExOne;

/** 
 * instead of using useffect to track updates on 'selected', and to make tagging call.
 * use extra function to bind update on 'selected' and 'tagging call' together.
*/