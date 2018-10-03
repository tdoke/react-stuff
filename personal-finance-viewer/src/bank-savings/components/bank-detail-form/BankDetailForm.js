import React from 'react';
import FlexView from 'react-flexview/lib';
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
    <TextField
      label={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )

const BankDetailForm = ({
cancelInputs,
submitInputs,
handleSubmit
}) => (
    <div className='bank-detail-form-container'>
      <form onSubmit={handleSubmit(submitInputs)}>
        <FlexView>
          <FlexView marginRight={16}>
            <Field
              name="bankName"
              component={renderTextField}
              label="Bank"
            />
          </FlexView>
          <FlexView>
            <Field
              name="amount"
              component={renderTextField}
              label="Amount"
            />
          </FlexView>
        </FlexView>
        <FlexView hAlignContent="right" marginTop={40}>
          <FlexView marginRight={16}>
            <Button color="primary" onClick={cancelInputs}>
              Cancel
            </Button>
          </FlexView>
          <FlexView>
            <Button type="submit" color="primary">
              Add
            </Button>
          </FlexView>
        </FlexView>
      </form>
    </div>
  )

export default reduxForm({ form: 'BankDetailForm' })(BankDetailForm)  