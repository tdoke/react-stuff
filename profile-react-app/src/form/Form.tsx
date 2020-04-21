import * as React from "react";
import { List } from "./List";

export interface UserInputProps {}
export interface Record {
  firstName: string;
  lastName: string;
}
export interface UserInputState {
  firstName?: string;
  lastName?: string;
  records?: Record[];
}

export class UserInput extends React.Component<UserInputProps, UserInputState> {
  constructor(props: UserInputProps) {
    super(props);
    this.state = { firstName: "", lastName: "", records: [] };
  }
  onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedRecords = [
      ...this.state.records,
      { firstName: this.state.firstName, lastName: this.state.lastName }
    ];
    this.setState({
      firstName: "",
      lastName: "",
      records: updatedRecords
    } as UserInputState);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.onInputChange}
          />
          <br></br>
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.onInputChange}
          />
          <button type="submit">submit</button>
          <List records={this.state.records} />
        </form>
        
      </div>
    );
  }
}
