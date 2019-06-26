import TimeTicker from './jsx/TimeTicker';
import MountExample from './component-lifecycles/Mount';
import UpdateExample from './component-lifecycles/Update';
import CounterWithUseState from './hooks/Counter';
import InputWithUseState from './hooks/Input';
import ListEmployees from './hooks/ListEmployees';
import { Employees } from './hooks/Employees';

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
  }
]