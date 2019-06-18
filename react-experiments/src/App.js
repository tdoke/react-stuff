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
          <Link to="/jsx">JSX</Link>
        </div>
        <div className='content'><RoutesConfig appRoutes={routes} /></div>
      </div>
    </div>
  );
}

export default App;