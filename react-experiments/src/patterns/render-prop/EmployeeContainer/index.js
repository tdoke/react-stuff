import React from "react";

import EmployeeContainer from "./EmployeeContainer";
import List from "./List";
import Table from "./Table";

export const EmployeeContainerWithListRenderProp = () => (
  <EmployeeContainer render={employees => <List employees={employees} />} />
);

export const EmployeeContainerWithTableRenderProp = () => (
  <EmployeeContainer render={employees => <Table employees={employees} />} />
);

export const EmployeeContainerWithChildrenRenderProp = () => (
  <EmployeeContainer>
    {employees => <List employees={employees} />}
  </EmployeeContainer>
);
