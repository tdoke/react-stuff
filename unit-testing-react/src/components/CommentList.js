import React from 'react';
import { connect } from 'react-redux';

export const CommentsList = (props) => {
  return (<div>
    <ul data-testid='commentsList'>
      {
        props.comments.map((comment, index) => <li key={index}>{comment}</li>)
      }
    </ul>
  </div>);
}

const mapStateToProps = (state) => ({
  comments: state.comments
})

export default connect(mapStateToProps)(CommentsList);