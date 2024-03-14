import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import addEmployee from './AddAndShowEmployee/store/actions/addEmployee';
// import removeEmployee from './AddAndShowEmployee/store/actions/removeEmployee';
import logo from './logo.svg';
import './App.css';
import { fetchEmployees, postEmployee, deleteEmployee } from './AddAndShowEmployee/store/actions/thunks';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(addEmployee({ name: "trushant", location: "thane, mumbai", id: 1 }));
    // dispatch(addEmployee({ name: "sadashiv", location: "thane, mumbai", id: 2 }));
    // dispatch(addEmployee({ name: "baburao", location: "thane, mumbai", id: 3 }));
    // dispatch(addEmployee({ name: "doke", location: "thane, mumbai", id: 4 }));
    // dispatch(removeEmployee(3));
    /**---------------------------------------------------- */
    // makeGet("/employees")
    //   .then((resp) => console.log(resp.data));
    dispatch(fetchEmployees());
    //dispatch(postEmployee({ name: "johnny", location: "thane, mumbai", id: 6 }))
    dispatch(deleteEmployee(6));

  }, [dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
