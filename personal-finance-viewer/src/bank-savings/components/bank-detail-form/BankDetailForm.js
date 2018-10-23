import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import FlexView from 'react-flexview/lib';
import { Field, FieldArray, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import './BankDetailForm.css';
const renderSelectField = ({
  input,//field.input not ui input element
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
    <FormControl error={touched && error} {...custom} className="account-type-select-cont">
      <InputLabel>{label}</InputLabel>
      <Select
        {...input}
        onChange={(value) => {
          input.onChange(value);
        }}
        children={children}
      />
    </FormControl>
  )




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

const renderAccounts = ({ fields, meta: { error }, bankDetailFormValues }) =>

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
            <FlexView marginRight={16} className="amount-input-cont">
              <Field
                name={`${account}.firstName`}
                component={renderTextField}
                label="Account"
              />
            </FlexView>
            <FlexView className="account-type-input-cont">
              <FlexView marginRight={16}>
                <Field
                  name={`${account}.type`}
                  component={renderSelectField}
                  label="Account"
                >
                  <MenuItem value="SAVING">SAVING</MenuItem>
                  <MenuItem value="FIXED">FIXED</MenuItem>
                </Field>
              </FlexView>
              {
                bankDetailFormValues &&
                bankDetailFormValues.accounts[index] &&
                bankDetailFormValues.accounts[index].type === "FIXED" && (
                  <React.Fragment>
                    <FlexView marginRight={16} className="interest-rate-input">
                      <Field
                        name={`${account}.interestRate`}
                        component={renderTextField}
                        label="Interest Rate"
                      />
                    </FlexView>
                    <FlexView marginRight={16} className="interest-rate-input">
                      <Field
                        name={`${account}.years`}
                        component={renderTextField}
                        label="Years"
                      />
                    </FlexView>
                  </React.Fragment>
                )
              }
            </FlexView>
            <FlexView marginRight={16} className="amount-input-cont">
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
      bankDetailFormValues,
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
          <FieldArray name="accounts" component={renderAccounts} props={{ bankDetailFormValues: bankDetailFormValues }} />
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
const mapStateToProps = (state) => ({
  bankDetailFormValues: getFormValues('BankDetailForm')(state)
})
export default connect(mapStateToProps)(reduxForm({ form: 'BankDetailForm' })(BankDetailForm))  