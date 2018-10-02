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
import AddIcon from '@material-ui/icons/Add';
import { openBankDetailsDialog } from '../bank-detail-dialog/store';
import BankDetailDialog from '../bank-detail-dialog/BankDetailDialog';
import './BankSavingsBar.css';

const BankSavingsBar = ({ openBankDetailsDialog }) => (
  <div>
    <ExpansionPanel className="row banks-savings-bar">
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <FlexView style={{ width: '100%' }}>
          <FlexView style={{ width: '50%' }} hAlignContent='left'>Bank Savings</FlexView>
          <FlexView style={{ width: '50%' }} hAlignContent='right'>0</FlexView>
        </FlexView>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <Button variant="fab" color="primary" mini aria-label="Add" onClick={openBankDetailsDialog}>
          <AddIcon />
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
    <BankDetailDialog />
  </div>
)

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ openBankDetailsDialog }, dispatch)

export default connect(null, mapDispatchToProps)(BankSavingsBar);
