import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { closeBankDetailsDialog } from './store';
import { createBankSaving, updateBankSaving } from '../../store/actions';
import BankDetailForm from '../bank-detail-form/BankDetailForm';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const BankDetailDialog = ({ open, bankSaving, bankSavingsLength, closeBankDetailsDialog, createBankSaving, updateBankSaving }) => (
  <div>
    <Dialog
      open={open}
      onClose={closeBankDetailsDialog}
      aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Bank Details</DialogTitle>
      <DialogContent>
        <BankDetailForm
          initialValues={bankSaving}
          cancelInputs={closeBankDetailsDialog}
          submitInputs={(values) => {
            values.id ?
              updateBankSaving(values) :
              createBankSaving({ ...values, color: COLORS[bankSavingsLength], id: bankSavingsLength + 1 })
            closeBankDetailsDialog()
          }}
        />
      </DialogContent>
    </Dialog>
  </div>
)

const mapStateToProps = (state) => ({
  open: state.bankDetailsDialog.open,
  bankSaving: state.bankDetailsDialog.bankSaving,
  bankSavingsLength: state.bankSavings.length
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ closeBankDetailsDialog, createBankSaving, updateBankSaving }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BankDetailDialog);
