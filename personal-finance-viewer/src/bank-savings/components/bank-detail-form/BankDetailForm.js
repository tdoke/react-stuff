import React, { PureComponent } from 'react';
import FlexView from 'react-flexview/lib';
import { Field, FieldArray, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';



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

const renderAccounts = ({ fields, meta: { error } }) =>

  <React.Fragment>
    <FlexView column>
      <FlexView hAlignContent="right" vAlignContent="center">
        <FlexView marginRight={16}><label>Add Account</label></FlexView>
        <FlexView>
          <IconButton color="primary" onClick={() => fields.push()}>
            <AddCircle />
          </IconButton>
        </FlexView>
      </FlexView>
      {
        fields.map((account, index) =>
          <FlexView key={index} vAlignContent="center" marginTop={16}>
            <FlexView marginRight={16}>
              <Field
                name={`${account}.firstName`}
                component={renderTextField}
                label="Account"
              />
            </FlexView>
            <FlexView marginRight={16}>
              <Field
                name={`${account}.amount`}
                component={renderTextField}
                label="Amount"
              />
            </FlexView>
            <FlexView>
              <IconButton color="primary" onClick={() => fields.remove(index)}>
                <RemoveCircle />
              </IconButton>
            </FlexView>
          </FlexView>)
      }
    </FlexView>
  </React.Fragment>

class BankDetailForm extends PureComponent {
  render() {
    const {
      cancelInputs,
      submitInputs,
      handleSubmit
    } = this.props;
    return (
      <div className='bank-detail-form-container'>
        <form onSubmit={handleSubmit(submitInputs)}>
          <FlexView>
            <FlexView style={{ width: '400px' }}>
              <Field
                name="bankName"
                component={renderTextField}
                label="Bank"
              />
            </FlexView>
          </FlexView>
          <FieldArray name="accounts" component={renderAccounts} />
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
  }
}
export default reduxForm({ form: 'BankDetailForm' })(BankDetailForm)  