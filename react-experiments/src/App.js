import React from 'react';
import RoutesConfig from './routesConfig';
import './App.css';
import routes from './routes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='menu'>
          <Link to="/jsx">JSX and React Elements</Link>
          <Link to="/jsx">React Api</Link>
          <Link to="/jsx">ReactDom Api</Link>
          <Link to="/jsx">reconciliation and diffing</Link>
          <Link to="/component-mount-lifecycles">component mount lifecycles</Link>
          <Link to="/component-update-lifecycles">component update lifecycles</Link>
          <Link to="/state-clock-example">State change example</Link>
          <Link to="/prop-passing-stateless">Stateless components prop passing</Link>
          <Link to="/prop-passing-stateful">Stateful components prop passing</Link>
          <Link to="/use-state-hook">hooks: with use state hook</Link>
          <Link to="/input-with-use-state">hooks: Input with user state</Link>
          <Link to="/list-employees-with-use-effects">hooks: List employees with use effects</Link>
          <Link to="/with-swapi-useeffect-hook">hooks: with swapi useeffect hook</Link>
          <Link to="/with-swapi-show-person-details">hooks: show person details</Link>
          <Link to="/with-reusable-hook">hooks: Employees with reusable hook</Link>
          <Link to="/jquery-vs-react">jquery vs react</Link>
        </div>
        <div className='content'><RoutesConfig appRoutes={routes} /></div>
      </div>
    </div>
  );
}

export default App;