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
    <div>
      <TextField
        label={label}
        error={touched && error && error.length > 0}
        required={true}
        {...input}
        {...custom}
      />
      {touched && (error && <div className="text-field-error">{error}</div>)}
    </div>
  )

const required = value => value ? undefined : 'Required'

const LoginForm = ({
  submitting,
  pristine,
  invalid,
  onLoginBtnClick,
  handleSubmit
}) => (
    <div className='login-form-container'>
      <form onSubmit={handleSubmit(onLoginBtnClick)}>
        <FlexView column>
          <FlexView marginTop={16} marginBottom={32}>
            <Field
              name="userName"
              component={renderTextField}
              label="UserName"
              type="text"
              validate={[required]}
              {...{ className: 'login-input-width', autoFocus: true }}
            />
          </FlexView>
          <FlexView marginBottom={64}>
            <Field
              name="password"
              component={renderTextField}
              label="Password"
              type="Password"
              validate={[required]}
              {...{ className: 'login-input-width' }}
            />
          </FlexView>
          <FlexView hAlignContent="right"  vAlignContent="bottom" marginBottom={16}>
            <Button type="submit" variant="outlined" color="primary" disabled={pristine || submitting || invalid}>
              Login
            </Button>
          </FlexView>
        </FlexView>
      </form>
    </div>
  )

export default reduxForm({ form: 'LoginForm' })(LoginForm)  
