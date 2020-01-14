import React from "react";
import EmployeeContainer from "./EmployeeContainer";
import Table from "./Table";
import List from "./List";

const EmployeeContainerWithTable = () => (
  <EmployeeContainer>
    <Table />
  </EmployeeContainer>
);

const EmployeeContainerWithList = () => (
  <EmployeeContainer>
    <List />
  </EmployeeContainer>
);

export { EmployeeContainerWithTable, EmployeeContainerWithList };
