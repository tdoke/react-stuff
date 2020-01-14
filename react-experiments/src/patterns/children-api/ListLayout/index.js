import React from "react";
import ListLayout from "./ListLayout";

const children = [1, 2, 3].map((element, index) => (
  <div key={index}>{element}</div>
));

const ListLayoutWithChildrenArray = () => <ListLayout>{children}</ListLayout>;

export default ListLayoutWithChildrenArray;
