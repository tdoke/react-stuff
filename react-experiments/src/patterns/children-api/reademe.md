Children Api can be used for
1] Container components holding data can use Children api to pass it to all children.
   for reusability one can give different types of children components to these containres
  <EmployeeContainer>
    <Table />
  </EmployeeContainer>
  <EmployeeContainer>
    <Chart />
  </EmployeeContainer>
  <EmployeeContainer>
    <List />
  </EmployeeContainer>

  2] Components that are closely bound to each other Select and option. Select can be container, accessing all the option elements using Children api

  3] Layout component taking in cards
     <ListLayout>
      {cards}
     </ListLayout>


