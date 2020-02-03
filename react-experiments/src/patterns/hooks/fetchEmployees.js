const employees = [
  { id: 1, name: "Trushant", department: "IT" },
  { id: 2, name: "Doke", department: "MANAGEMENT" }
];

export default function fetchEmployees() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(employees), 500);
  });
}
/** 
 * at above functions call site
 * fetchEmployees()  == promise is returned
 * fetchEmployees().then(resolveFn) == actual async call is made when .then(resolveFn) is called.
*/
