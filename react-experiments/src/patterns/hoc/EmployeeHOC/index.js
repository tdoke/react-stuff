import withEmployee from "./WithEmployeeHOC";
import List from "./List";
import Table from "./Table";

export const TableWithEmployeeHOC = withEmployee(Table);
export const ListWithEmployeeHOC = withEmployee(List);
