import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFormValues } from 'redux-form';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { closeBankDetailsDialog } from './store';
import { createBankSaving } from '../../store/actions';
import BankDetailForm from '../bank-detail-form/BankDetailForm';

const BankDetailDialog = ({ open, closeBankDetailsDialog, createBankSaving }) => (
  <div>
    <Dialog
      open={open}
      onClose={closeBankDetailsDialog}
      aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Bank Details</DialogTitle>
      <DialogContent>
        <BankDetailForm
          cancelInputs={closeBankDetailsDialog}
          submitInputs={(values) => {
            console.log(values)
            createBankSaving(values)
            closeBankDetailsDialog()
          }}
        />
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={closeBankDetailsDialog} color="primary">
          Cancel
        </Button>
        <Button onClick={() => {
          console.log(getFormValues("BankDetailForm").values)
          createBankSaving(getFormValues("BankDetailForm").values)
          closeBankDetailsDialog()
        }}
          color="primary">
          Add
        </Button> */}
      </DialogActions>
    </Dialog>
  </div>
)

const mapStateToProps = (state) => ({
  open: state.bankDetailsDialog.open
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ closeBankDetailsDialog, createBankSaving }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BankDetailDialog);
