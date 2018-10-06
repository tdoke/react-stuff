import React from 'react';
import { shallow } from 'enzyme';
import { BankSavingsBar } from './BankSavingsBar';

describe("BankSavingsBar Test", () => {
  let wrapper;
  const openBankDetailsDialog_Mock = jest.fn()
  const bankSavings = [{ bankName: 'TJSB', amount: 400 }, { bankName: 'PARSIK', amount: 600 }]
  beforeEach(() => {
    wrapper = shallow(<BankSavingsBar
      bankSavings={bankSavings}
      openBankDetailsDialog={openBankDetailsDialog_Mock} />)
  })

  test("render component BankSavingsBar", () => {
    expect(wrapper).toBeDefined()
  })

  test("should show correct heading", () => {
    expect(wrapper.find("#bank-savings-label").text()).toMatch("Bank Savings")
  })

  test("should show correct total", () => {
    expect(wrapper.find("#bank-savings-total").text()).toMatch("1000")
  })

  test("when open dialog button is clicked then should open bank detail dialog", () => {
    wrapper.find('#btn-open-bank-detail-dialog').simulate('click')
    expect(openBankDetailsDialog_Mock.mock.calls.length).toBe(1)
  })

})