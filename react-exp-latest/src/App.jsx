import './App.css'
import Counter  from './hooks/useStateHook/Counter'
import { RenderListWithoutKeys } from './react-render/RenderListWithoutKeys'
import { RenderOnPropsChange } from './react-render/RenderOnPropsChange'
import { RenderOnStateChange } from './react-render/RenderOnStateChange'
import UseEffectCounterOne from './hooks/useEffectHook/CounterOne'
import UseEffectCounterTwo from './hooks/useEffectHook/CounterTwo'
import UseEffectCounterThree from './hooks/useEffectHook/CounterThree'
import RaceConditionWithFetch from './hooks/useEffectHook/RaceCondition/RaceConditionWithFetch'
import RaceConditionWithFetchResolved from './hooks/useEffectHook/RaceCondition/RaceConditionWithFetchResolved'

function App() {

  return (
    <>
      {/* <RenderOnStateChange /> */}
      {/* <RenderOnPropsChange /> */}
      {/* <RenderListWithoutKeys /> */}
      {/* <Counter /> */}
      {/* <UseEffectCounterOne /> */}
      {/* <UseEffectCounterTwo /> */}
      {/* <UseEffectCounterThree /> */}
      {/* <RaceConditionWithFetch /> */}
      <RaceConditionWithFetchResolved />
    </>
  )
}

export default App
