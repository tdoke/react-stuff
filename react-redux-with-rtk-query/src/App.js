import './App.css';
import AddAndShowEmployeesContainer from './AddAndShowEmployee/container';
import AddAndShowCompanies from './AddAndShowCompanies/container';

function App() {
    return (
    <>
      <AddAndShowEmployeesContainer/>
      <div>----------------------------------</div>
      <AddAndShowCompanies/>
    </>
  );
}

export default App;
