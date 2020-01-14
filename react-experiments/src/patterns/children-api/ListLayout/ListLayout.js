import React from "react";

const ListLayout = ({ children }) => {
  console.log(children);
  return <div className="list-layout">{children}</div>;
};

export default ListLayout;
