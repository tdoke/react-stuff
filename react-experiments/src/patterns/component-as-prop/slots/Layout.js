import React from 'react';
const Layout = ({ header, body, footer}) => {
  return (<div>
    <div style={{background: 'red', color: 'white', padding: '4rem'}}>{header}</div>
    <div style={{background: 'blue', color: 'white', padding: '4rem'}}>{body}</div>
    <div style={{background: 'green', color: 'white', padding: '4rem'}}>{footer}</div>
  </div>  );
}
 
export default Layout;