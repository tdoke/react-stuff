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
        </div>
        <div className='content'><RoutesConfig appRoutes={routes} /></div>
      </div>
    </div>
  );
}

export default App;