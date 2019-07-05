import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';


class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ comments: event.target.value })
  }

  handleSubmitBtnClick = (event) => {
    event.preventDefault()
    // call an action saving comments
    this.props.saveComments(this.state.comments)

    this.setState({ comments: '' })
  }

  render() {
    return (<div>
      <h4>add comment</h4>
      <form onSubmit={this.handleSubmitBtnClick}>
        <textarea value={this.state.comments} onChange={this.handleInputChange}></textarea>
        <button>submit</button>
      </form>
    </div>);
  }
}

export default connect(null, actions)(CommentBox);