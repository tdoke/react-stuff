import './App.css'
import Counter  from './hooks/useStateHook/Counter'
import { RenderListWithoutKeys } from './react-render/RenderListWithoutKeys'
import { RenderOnPropsChange } from './react-render/RenderOnPropsChange'
import { RenderOnStateChange } from './react-render/RenderOnStateChange'


function App() {

  return (
    <>
      {/* <RenderOnStateChange /> */}
      {/* <RenderOnPropsChange /> */}
      {/* <RenderListWithoutKeys /> */}
      <Counter />
    </>
  )
}

export default App
