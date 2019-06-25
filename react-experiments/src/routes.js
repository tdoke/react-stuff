import TimeTicker from './jsx/TimeTicker';
import MountExample from './component-lifecycles/Mount';
import UpdateExample from './component-lifecycles/Update';
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
  }
]