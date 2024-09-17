import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'update_age': {
            return {
                ...state,
                age: action.age
            };
        }
        case 'update_name': {
            return {
                ...state,
                name: action.name
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}
function ProfileForm() {
    const [state, dispatch] = useReducer(reducer, { name: 'Taylor', age: 42 });

    return ( <form>
        <input type="text" value={state.name} onChange={e => dispatch({ type: 'update_name', name: e.target.value })}/>
        <input type="text" value={state.age} onChange={e => dispatch({ type: 'update_age', name: e.target.value })}/>
    </form> );
}

export default ProfileForm;