import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { closeBankDetailsDialog } from './store';

const BankDetailDialog = ({ open, closeBankDetailsDialog }) => (
  <div>
    <Dialog
      open={open}
      onClose={closeBankDetailsDialog}
      aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Bank Details</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Add Bank Savings Details Here
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeBankDetailsDialog} color="primary">
          Cancel
        </Button>
        <Button onClick={closeBankDetailsDialog} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  </div>
)

const mapStateToProps = (state) => ({
  open: state.bankDetailsDialog.open
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ closeBankDetailsDialog }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BankDetailDialog);
