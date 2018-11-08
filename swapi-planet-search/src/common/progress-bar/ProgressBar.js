import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import { connect } from 'react-redux'

const ProgressBar = ({ inProgress }) => (
  <div>
    {inProgress && <LinearProgress />}
  </div>
)

const mapStateToProps = (state) => ({
  inProgress: state.progressBar.inProgress
})

export default connect(mapStateToProps, null)(ProgressBar);
