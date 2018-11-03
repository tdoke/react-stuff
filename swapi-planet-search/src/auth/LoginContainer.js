import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from './store/actions'
import LoginForm from './components/LoginForm'


const LoginContainer = ({ login, history }) => (
  <div>
    <LoginForm onLoginBtnClick={values => login(values, () => history.push("/planets/search"))} />
  </div>
)


const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ login }, dispatch)

export default connect(null, mapDispatchToProps)(LoginContainer);
