import React from "react";
import Container from "./Container";
import Notification from "./Notification";

const ContainerWithNotification = ({ result }) => (
  <Container
    notification={
      <Notification text={result ? "I am passed" : "I am failed"} />
    }
  />
);

export default ContainerWithNotification;

// Container cant pass any specific prop to Notification.
// ContainerWithNotification can pass prop to Notification
