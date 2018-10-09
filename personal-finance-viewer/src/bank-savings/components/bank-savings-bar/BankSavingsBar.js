import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlexView from 'react-flexview/lib';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import AccountCircle from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { openBankDetailsDialog } from '../bank-detail-dialog/store';
import BankDetailDialog from '../bank-detail-dialog/BankDetailDialog';
import { BankSavingsPieChart } from '../bank-savings-pie-chart/BankSavingsPieChart';
import './BankSavingsBar.css';

const getTotalBankAmount = (bankSavings) =>
  bankSavings.reduce((a, b) => Number(a) + Number(getSumofAccounts(b.accounts)), 0);
const getSumofAccounts = (accounts) =>
  accounts.reduce((a, b) => Number(a) + Number(b.amount), 0);
export const BankSavingsBar = ({ openBankDetailsDialog, bankSavings }) => (
  <div>
    <ExpansionPanel className="row banks-savings-bar">
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <FlexView style={{ width: '100%' }}>
          <FlexView style={{ width: '50%' }} hAlignContent='left'><span id="bank-savings-label">Bank Savings</span></FlexView>
          <FlexView style={{ width: '50%' }} hAlignContent='right'><span id="bank-savings-total">{getTotalBankAmount(bankSavings)}</span></FlexView>
        </FlexView>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <FlexView style={{ width: '50%' }} hAlignContent="left">
          <List>
            {
              bankSavings.map((bankSaving, index) => (
                <ListItem key={index}>
                  <AccountCircle style={{ color: bankSaving.color, width: '48px', height: '48px' }} />
                  <ListItemText primary={bankSaving.bankName.toUpperCase()} secondary={getSumofAccounts(bankSaving.accounts)} />
                </ListItem>
              ))
            }
          </List>
        </FlexView>
        <FlexView style={{ width: '50%' }} hAlignContent="right">
          <BankSavingsPieChart bankSavings={bankSavings} />
        </FlexView>
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <Button id="btn-open-bank-detail-dialog" variant="fab" color="primary" mini aria-label="Add" onClick={openBankDetailsDialog}>
          <AddIcon />
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
    <BankDetailDialog />
  </div>
)
const mapStateToProps = (state) => ({
  bankSavings: state.bankSavings
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ openBankDetailsDialog }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BankSavingsBar);
