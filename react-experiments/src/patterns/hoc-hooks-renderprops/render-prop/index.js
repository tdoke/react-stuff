import React from 'react';
import PrintDetailsComponent from "./PrintDetails";
import WithFlag from "./WithFlag";
import WithLang from "./WithLang";

export default () => (
  <WithFlag>
    {({ flagCountry }) => (
      <WithLang>
        {({ language }) => <PrintDetailsComponent lang={language} flag={flagCountry} />}
      </WithLang>
    )}
  </WithFlag>
);
