import React from "react";
import { useEmployeeContext } from "./EmployeeContext";

function EmployeeForm() {
  const [inputs, setInputs] = React.useState({ firstName: "", lastName: "" });
  const { handleSubmit: onSubmit } = useEmployeeContext();

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const employee = { ...inputs };
    onSubmit(employee);
    setInputs(inputs => ({
      ...inputs,
      firstName: "",
      lastName: ""
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          value={inputs.firstName}
          onChange={handleInputChange}
        />
        <br></br>
        <input
          name="lastName"
          value={inputs.lastName}
          onChange={handleInputChange}
        />
        <br></br>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
