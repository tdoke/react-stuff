import { lazy } from 'react';
import './App.css';
import AddAndShowEmployeesContainer from './AddAndShowEmployee/container';
const AddShowCompaniesContainer = lazy(() => import('./AddAndShowCompanies/'));
const UsageQueriesContainer = lazy(() => import('./UsageQueries/'));

function App() {
    return (
    <>
      {/* <AddAndShowEmployeesContainer /> */}
      <div>----------------------------------</div>
      {/* <AddShowCompaniesContainer /> */}
      <UsageQueriesContainer />
    </>
  );
}

export default App;
