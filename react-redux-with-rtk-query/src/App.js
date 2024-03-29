import { lazy } from 'react';
import './App.css';
import AddAndShowEmployeesContainer from './AddAndShowEmployee/container';
const AddShowCompaniesContainer = lazy(() => import('./AddAndShowCompanies/'));


function App() {
    return (
    <>
      <AddAndShowEmployeesContainer />
      <div>----------------------------------</div>
      <AddShowCompaniesContainer />
    </>
  );
}

export default App;
