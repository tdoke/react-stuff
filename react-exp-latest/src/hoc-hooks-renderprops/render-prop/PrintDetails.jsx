import React from 'react';

const PrintDetails = ({ lang, flag }) => {
  return (
    <div>
      Language is : {lang}
      <br/>Flag is of : {flag}
    </div>
  );
};

export default PrintDetails;
