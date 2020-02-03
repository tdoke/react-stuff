import React from "react";
import TimeTicker from "./jsx/TimeTicker";
import MountExample from "./component-lifecycles/Mount";
import UpdateExample from "./component-lifecycles/Update";
import CounterWithUseState from "./hooks/Counter";
import InputWithUseState from "./hooks/Input";
import ListEmployees from "./hooks/ListEmployees";
import { Employees } from "./hooks/Employees";
import ShowList from "./hooks/ShowList";
import ShowPersonDetails from "./hooks/ShowPersonById";
import { Clock } from "./state-and-props/state-lifecycle/Clock";
import StatelessPropPassing from "./state-and-props/components-props/prop-passing-3-level/stateless-children";
import StatefulPropPassing from "./state-and-props/components-props/prop-passing-3-level/stateful-children/A";
import Basic from "./patterns/children-api/basic";
import ChildrenApiPropPassing from "./patterns/children-api/prop-passing";
import {
  EmployeeContainerWithTable,
  EmployeeContainerWithList
} from "./patterns/children-api/EmployeeContainer";
import ListLayout from "./patterns/children-api/ListLayout";
import BasicComponentAsProp from "./patterns/component-as-prop/basic";
import Slots from "./patterns/component-as-prop/slots";
import {
  EmployeeContainerWithListRenderProp,
  EmployeeContainerWithTableRenderProp
} from "./patterns/render-prop/EmployeeContainer";

import {
  TableWithEmployeeHOC,
  ListWithEmployeeHOC
} from "./patterns/hoc/EmployeeHOC";

import { TableWithEmployeeHook, ListWithEmployeeHook } from "./patterns/hooks";

export default [
  {
    path: "/jsx",
    exact: true,
    component: TimeTicker,
    key: "TimeTicker"
  },
  {
    path: "/component-mount-lifecycles",
    exact: true,
    component: MountExample,
    key: "MountExample"
  },
  {
    path: "/component-update-lifecycles",
    exact: true,
    component: UpdateExample,
    key: "UpdateExample"
  },
  {
    path: "/use-state-hook",
    exact: true,
    component: CounterWithUseState,
    key: "CounterWithUseState"
  },
  {
    path: "/input-with-use-state",
    exact: true,
    component: InputWithUseState,
    key: "InputWithUsefState"
  },
  {
    path: "/list-employees-with-use-effects",
    exact: true,
    component: ListEmployees,
    key: "ListEmployees"
  },
  {
    path: "/with-reusable-hook",
    exact: true,
    component: Employees,
    key: "Employees"
  },
  {
    path: "/with-swapi-useeffect-hook",
    exact: true,
    component: ShowList,
    key: "ShowList"
  },
  {
    path: "/with-swapi-show-person-details",
    exact: true,
    component: ShowPersonDetails,
    key: "ShowPersonDetails"
  },
  {
    path: "/state-clock-example",
    exact: true,
    component: Clock,
    key: "Clock"
  },
  {
    path: "/prop-passing-stateless",
    exact: true,
    component: StatelessPropPassing,
    key: "StatelessPropPassing"
  },
  {
    path: "/prop-passing-stateful",
    exact: true,
    component: StatefulPropPassing,
    key: "StatefulPropPassing"
  },
  {
    path: "/patterns/children-api/header-hard-bind-navigation",
    exact: true,
    component: Basic.HeaderWithHardBoundNavigation,
    key: "HeaderWithHardBoundNavigation"
  },
  {
    path: "/patterns/children-api/header-with-child-prop",
    exact: true,
    component: Basic.HeaderWithChildrenProp,
    key: "HeaderWithChildProp"
  },
  {
    path: "/patterns/children-api/prop-passing/hard-bind",
    exact: true,
    component: ChildrenApiPropPassing.HardboundContainer,
    key: "ChildrenApiPropPassing.HardboundContainer"
  },
  {
    path: "/patterns/children-api/prop-passing/with-child-prop",
    exact: true,
    component: ChildrenApiPropPassing.ContainerWithChildrenProp,
    key: "ChildrenApiPropPassing.ContainerWithChildrenProp"
  },
  {
    path: "/patterns/children-api/employee-container-with-table",
    exact: true,
    component: EmployeeContainerWithTable,
    key: "EmployeeContainerWithTable"
  },
  {
    path: "/patterns/children-api/employee-container-with-list",
    exact: true,
    component: EmployeeContainerWithList,
    key: "EmployeeContainerWithList"
  },
  {
    path: "/patterns/children-api/list-layout",
    exact: true,
    component: ListLayout,
    key: "ListLayout"
  },
  {
    path: "/patterns/component-as-prop/basic",
    exact: true,
    component: () => (
      <div>
        <BasicComponentAsProp result={true} />{" "}
        <BasicComponentAsProp result={false} />
      </div>
    ),
    key: "BasicComponentAsProp"
  },
  {
    path: "/patterns/component-as-prop/slots",
    exact: true,
    component: Slots,
    key: "Slots"
  },
  {
    path: "/patterns/render-props/emp-container-list",
    exact: true,
    component: EmployeeContainerWithListRenderProp,
    key: "EmployeeContainerWithListRenderProp"
  },
  {
    path: "/patterns/render-props/emp-container-table",
    exact: true,
    component: EmployeeContainerWithTableRenderProp,
    key: "EmployeeContainerWithTableRenderProp"
  },
  {
    path: "/patterns/hoc/table-with-emp-hoc",
    exact: true,
    component: TableWithEmployeeHOC,
    key: "TableWithEmployeeHOC"
  },
  {
    path: "/patterns/hoc/list-with-emp-hoc",
    exact: true,
    component: ListWithEmployeeHOC,
    key: "ListWithEmployeeHOC"
  },
  {
    path: "/patterns/hook/table-with-emp-hook",
    exact: true,
    component: TableWithEmployeeHook,
    key: "TableWithEmployeeHook"
  },
  {
    path: "/patterns/hook/list-with-emp-hook",
    exact: true,
    component: ListWithEmployeeHook,
    key: "ListWithEmployeeHook"
  }
];
