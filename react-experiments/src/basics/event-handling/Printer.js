import React from 'react';
import { BtnClicker } from './BtnClicker';
const printNumber = (number) => console.log(number);
export const Printer = () => (
  <div>
    <BtnClicker onBtnClicked={printNumber} />
  </div>
)