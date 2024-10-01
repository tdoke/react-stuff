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
import ProfileForm from './hooks/useReducerHook/ProfileForm'
import UsePreviousExample from './hooks/useRefHook/usePreviousExample';
import RefDomExample from './hooks/useRefHook/useRefInput';
import EffectAPExOne from './hooks/useEffectHook/antipatterns/EffectAPExOne';
import VideoPlayer from './hooks/useEffectHook/VideoPlayer';
import ChatRoom from './hooks/useEffectHook/ChatRoom/';
import ChatRoomWithEffectEvent from './hooks/useEffectHook/ChatRoomWithEffectEvent/';
import OnlineStatus from './hooks/useCustomHooks/OnlineStatus/';
import FormInput from './hooks/useCustomHooks/FormInput/';
import ChatRoomWithCustomHook from './hooks/useCustomHooks/ChatRoomWithCustomHook/';
import EmpDetailsContxt from './context/EmpDetailsContext/';
import EmployeeFormAndListWithContext from './context/context-as-state/';
import { EmployeeContainerWithList, EmployeeContainerWithTable } from './children-api/EmployeeContainer/';
import BasicHeader from './children-api/basic/index';
import ExampleOne from './children-api/ChildrenRendering/ExampleOne';
import ExampleTwo from './children-api/ChildrenRendering/ExampleTwo';
import PortalExample from './portals/Parent';

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
      {/* <RaceConditionWithFetchResolved /> */}
      {/* <ProfileForm /> */}
      {/* <UsePreviousExample /> */}
      {/* <RefDomExample /> */}
      {/* <EffectAPExOne /> */}
      {/* <VideoPlayer /> */}
      {/* <ChatRoom /> */}
      {/* <ChatRoomWithEffectEvent /> */}
      {/* <OnlineStatus/> */}
      {/* <FormInput/> */}
      {/* <ChatRoomWithCustomHook /> */}
      {/* <EmpDetailsContxt /> */}
      {/* <EmployeeFormAndListWithContext /> */}
      {/* <EmployeeContainerWithList /> 
      <EmployeeContainerWithTable /> */}
      {/* <BasicHeader.HeaderWithHardBoundNavigation />
      <BasicHeader.HeaderWithChildrenProp /> */}
      {/* <ExampleOne /> */}
      {/* <ExampleTwo /> */}
      <PortalExample />
    </>
  )
}

export default App
