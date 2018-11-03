import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from './store/actions'
import LoginForm from './components/LoginForm'


const LoginContainer = ({ login }) => (
  <div>
    <LoginForm onLoginBtnClick={login} />
  </div>
)


const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ login }, dispatch)

  export default connect(null, mapDispatchToProps)(LoginContainer);
