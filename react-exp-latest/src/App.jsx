import './App.css'
import { RenderListWithoutKeys } from './react-render/RenderListWithoutKeys'
import { RenderOnPropsChange } from './react-render/RenderOnPropsChange'
import { RenderOnStateChange } from './react-render/RenderOnStateChange'


function App() {

  return (
    <>
      {/* <RenderOnStateChange /> */}
      {/* <RenderOnPropsChange /> */}
      <RenderListWithoutKeys />
    </>
  )
}

export default App
