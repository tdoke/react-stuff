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

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const BankDetailDialog = ({ open, bankSavingsLength, closeBankDetailsDialog, createBankSaving }) => (
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
            createBankSaving({...values, color: COLORS[bankSavingsLength]})
            closeBankDetailsDialog()
          }}
        />
      </DialogContent>
    </Dialog>
  </div>
)

const mapStateToProps = (state) => ({
  open: state.bankDetailsDialog.open,
  bankSavingsLength: state.bankSavings.length
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ closeBankDetailsDialog, createBankSaving }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BankDetailDialog);
