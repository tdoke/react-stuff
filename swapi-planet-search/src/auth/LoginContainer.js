import React from 'react'
import FlexView from 'react-flexview/lib';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from './store/actions'
import LoginForm from './components/LoginForm'
import './LoginContainer.css'

const LoginContainer = ({ login, history }) => (
  <div className="login-container">
    <FlexView height={600}>
      <FlexView hAlignContent="center" vAlignContent="center" height='100%' width='100%'>
        <Paper className="login-container-paper">
          <LoginForm onLoginBtnClick={values => login(values, () => history.push("/planets/search"))} />
        </Paper>
      </FlexView>
    </FlexView>
  </div>
)


const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ login }, dispatch)

export default connect(null, mapDispatchToProps)(LoginContainer);
