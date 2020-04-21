import React from "react";
import RoutesConfig from "./routesConfig";
import "./App.css";
import routes from "./routes";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="menu">
          <Link to="/jsx">JSX and React Elements</Link>
          <Link to="/jsx">React Api</Link>
          <Link to="/jsx">ReactDom Api</Link>
          <Link to="/jsx">reconciliation and diffing</Link>
          <Link to="/component-mount-lifecycles">
            component mount lifecycles
          </Link>
          <Link to="/component-update-lifecycles">
            component update lifecycles
          </Link>
          <Link to="/state-clock-example">State change example</Link>
          <Link to="/prop-passing-stateless">
            Stateless components prop passing
          </Link>
          <Link to="/prop-passing-stateful">
            Stateful components prop passing
          </Link>
          <Link to="/use-state-hook">hooks: with use state hook</Link>
          <Link to="/input-with-use-state">hooks: Input with user state</Link>
          <Link to="/list-employees-with-use-effects">
            hooks: List employees with use effects
          </Link>
          <Link to="/with-swapi-useeffect-hook">
            hooks: with swapi useeffect hook
          </Link>
          <Link to="/with-swapi-show-person-details">
            hooks: show person details
          </Link>
          <Link to="/with-reusable-hook">
            hooks: Employees with reusable hook
          </Link>
          <Link to="/jquery-vs-react">jquery vs react</Link>
          <Link to="/patterns/children-api/header-hard-bind-navigation">
            patterns: children api / header with hard binding child
          </Link>
          <Link to="/patterns/children-api/header-with-child-prop">
            patterns: children api / header with children prop
          </Link>
          <Link to="/patterns/children-api/prop-passing/hard-bind">
            patterns: children api / container with hard binding child
          </Link>
          <Link to="/patterns/children-api/prop-passing/with-child-prop">
            patterns: children api / container with children prop
          </Link>
          <Link to="/patterns/children-api/employee-container-with-table">
            patterns: children api / container with table
          </Link>
          <Link to="/patterns/children-api/employee-container-with-list">
            patterns: children api / container with list
          </Link>
          <Link to="/patterns/children-api/list-layout">
            patterns: children api / container with children array
          </Link>
          <Link to="/patterns/component-as-prop/basic">
            patterns: component as prop / container with component prop
          </Link>
          <Link to="/patterns/component-as-prop/slots">
            patterns: component as prop / slots
          </Link>
          <Link to="/patterns/render-props/emp-container-list">
            patterns: renderprops / employeecontainer-list
          </Link>
          <Link to="/patterns/render-props/emp-container-table">
            patterns: renderprops / employeecontainer-table
          </Link>
          <Link to="/patterns/hoc/table-with-emp-hoc">
            patterns: hoc / employeehoc-table
          </Link>
          <Link to="/patterns/hoc/list-with-emp-hoc">
            patterns: hoc / employeehoc-list
          </Link>
          <Link to="/patterns/hook/table-with-emp-hook">
            patterns: hooks / employee-hook-table
          </Link>
          <Link to="/patterns/hook/list-with-emp-hook">
            patterns: hooks / employee-hook-list
          </Link>
          <Link to="/patterns/hoc-hooks-renderprops/hoc">
            patterns: hoc-hooks-renderprops / hoc example
          </Link>
          <Link to="/patterns/hoc-hooks-renderprops/render-prop">
            patterns: hoc-hooks-renderprops / render prop example
          </Link>
          <Link to="/patterns/hoc-hooks-renderprops/hooks">
            patterns: hoc-hooks-renderprops / hooks
          </Link>
          <Link to="/patterns/hooks/reducerhook">
            patterns: reducer hooks example
          </Link>
          <Link to='/patterns/hooks/reducerhook-with-context'>
            patterns: reducer hook with context
          </Link>
          <Link to="/profiler/mousetracker">
            mouse tracker with profile
          </Link>
          <Link to="/i18n">
            i18n
          </Link>
        </div>
        <div className="content">
          <RoutesConfig appRoutes={routes} />
        </div>
      </div>
    </div>
  );
}

export default App;
