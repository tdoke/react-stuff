import React from 'react';

export const BtnClicker = ({ onBtnClicked }) => {
  const onBtnC = () => onBtnClicked(100)
  return (
    <div>
      <button onClick={onBtnC}>
        Click
    </button>
    </div>
  )
}
//https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
//https://stackoverflow.com/questions/43968779/are-lambda-in-jsx-attributes-an-anti-pattern/43968902#43968902
