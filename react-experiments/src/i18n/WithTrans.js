import React from "react";

const keys = {
  "common.hello": "Hello..."
};
const i18n = key => keys[key];

export default WrappedComponent => (props) => (
  <WrappedComponent {...props} i18n={i18n} />
);
