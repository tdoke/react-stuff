import './App.css'
import { RenderOnPropsChange } from './react-render/RenderOnPropsChange'
import { RenderOnStateChange } from './react-render/RenderOnStateChange'


function App() {

  return (
    <>
      {/* <RenderOnStateChange /> */}
      <RenderOnPropsChange />
    </>
  )
}

export default App
