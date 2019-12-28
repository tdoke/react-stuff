import React from 'react';
import HeaderWithHardBoundNavigation from './HeaderWithHardBoundNavigation';
import HeaderWithChildProp from './HeaderWithChildProp';
import Navigation from './Navigation';

const HeaderWithChildrenProp = () => (<HeaderWithChildProp><Navigation/></HeaderWithChildProp>);

export default { HeaderWithHardBoundNavigation, HeaderWithChildrenProp };