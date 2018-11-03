import React from 'react'
import LoginForm from './components/LoginForm'
export const LoginContainer = () => (
  <div>
    <LoginForm onLoginBtnClick={values => console.log(values)}/>
  </div>
  )
