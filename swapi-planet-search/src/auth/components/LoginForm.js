import React from 'react'
import FlexView from 'react-flexview/lib';
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './LoginForm.css'

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
    <TextField
      label={label}
      error={touched && error}
      {...input}
      {...custom}
    />
  )

const LoginForm = ({
  onLoginBtnClick,
  handleSubmit
}) => (
    <div className='login-form-container'>
      <form onSubmit={handleSubmit(onLoginBtnClick)}>
        <FlexView>
          <FlexView>
            <Field
              name="userName"
              component={renderTextField}
              label="userName"
            />
          </FlexView>
          <FlexView>
            <Field
              name="password"
              component={renderTextField}
              label="Password"
              type="password"
              value="19BBY"
            />
          </FlexView>
          <FlexView>
            <Button type="submit" color="primary">
              Login
          </Button>
          </FlexView>
        </FlexView>
      </form>
    </div>
  )

export default reduxForm({ form: 'LoginForm' })(LoginForm)  
