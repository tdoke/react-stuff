import TimeTicker from './jsx/TimeTicker';
import MountExample from './component-lifecycles/Mount';
import UpdateExample from './component-lifecycles/Update';
import CounterWithUseState from './hooks/Counter';
import InputWithUseState from './hooks/Input';
import ListEmployees from './hooks/ListEmployees';
import { Employees } from './hooks/Employees';
import ShowList from './hooks/ShowList';
import ShowPersonDetails from './hooks/ShowPersonById';
import { Clock } from './state-and-props/state-lifecycle/Clock';
import StatelessPropPassing from './state-and-props/components-props/prop-passing-3-level/stateless-children';
import StatefulPropPassing from './state-and-props/components-props/prop-passing-3-level/stateful-children/A';


export default [
  {
    path: "/jsx",
    exact: true,
    component: TimeTicker,
    key: 'TimeTicker'
  },
  {
    path: "/component-mount-lifecycles",
    exact: true,
    component: MountExample,
    key: 'MountExample'
  },
  {
    path: "/component-update-lifecycles",
    exact: true,
    component: UpdateExample,
    key: 'UpdateExample'
  },
  {
    path: "/use-state-hook",
    exact: true,
    component: CounterWithUseState,
    key: 'CounterWithUseState'
  },
  {
    path: "/input-with-use-state",
    exact: true,
    component: InputWithUseState,
    key: 'InputWithUsefState'
  },
  {
    path: "/list-employees-with-use-effects",
    exact: true,
    component: ListEmployees,
    key: 'ListEmployees'
  },
  {
    path: "/with-reusable-hook",
    exact: true,
    component: Employees,
    key: 'Employees'
  },
  {
    path: "/with-swapi-useeffect-hook",
    exact: true,
    component: ShowList,
    key: 'ShowList'
  },
  {
    path: "/with-swapi-show-person-details",
    exact: true,
    component: ShowPersonDetails,
    key: 'ShowPersonDetails'
  },
  {
    path: "/state-clock-example",
    exact: true,
    component: Clock,
    key: 'Clock'
  },
  {
    path: "/prop-passing-stateless",
    exact: true,
    component: StatelessPropPassing,
    key: 'StatelessPropPassing'
  },
  {
    path: "/prop-passing-stateful",
    exact: true,
    component: StatefulPropPassing,
    key: 'StatefulPropPassing'
  }
]