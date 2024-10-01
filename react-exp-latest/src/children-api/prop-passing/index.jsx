import React from 'react';
import HardboundContainer from "./Container";
import ContainerWithChildren from "./ContainerWithChildren";
import List from "./List";

const ContainerWithChildrenProp = () => (
  <ContainerWithChildren>
    <List />
  </ContainerWithChildren>
);

export default { HardboundContainer, ContainerWithChildrenProp };
