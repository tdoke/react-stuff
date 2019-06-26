import React, { useState } from 'react';

const initUserInput = {
  val: '',
  len: 0
}
const Input = () => {
  const [userInput, setUserInput] = useState(initUserInput);

  const handleInputChange = (event) => setUserInput({
    val: event.target.value,
    len: event.target.value.length
  });

  return (
    <React.Fragment>
      <input value={userInput.val} onChange={handleInputChange} />
      <label>{JSON.stringify(userInput)}</label>
    </React.Fragment>
  )
}

export default Input;