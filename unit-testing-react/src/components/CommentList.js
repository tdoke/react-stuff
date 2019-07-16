import React from 'react';
import { connect } from 'react-redux';

const commentsList = (props) => {
  return (<div>
    <ul>
      {
        props.comments.map((comment, index) => <li key={index}>{comment}</li>)
      }
    </ul>
  </div>);
}

const mapStateToProps = (state) => ({
  comments: state.comments
})

export default connect(mapStateToProps)(commentsList);