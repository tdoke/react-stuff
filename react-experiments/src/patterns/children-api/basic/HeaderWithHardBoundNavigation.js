import React from 'react';
import Navigation from './Navigation';

const HeaderWithHardBoundNavigation = () => {
  return ( <div>I am HeaderWithHardBoundNavigation<Navigation/></div> );
}
 
export default HeaderWithHardBoundNavigation;

/** 
 * problems with this Header -> Navigation composition:
 * 1] There is tight binding between Header and Navigation. 
 *    Suppose we want to use only Header tomorrow without using Navigation, its not possible.
 * 2] While unit testing Header, i need to mock Navigation and provide it to Header. Its an issue. (shallow rendering solves it upto certain extent)
 * to avoid above problems we can pass navigation to header using reacts children prop.
 * instead of direct hard bound composition, always try to use Reacts children prop to compose components.
 * try to compose components in index.js
*/