import TimeTicker from './jsx/TimeTicker';
import MountExample from './component-lifecycles/Mount';
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
  }
]