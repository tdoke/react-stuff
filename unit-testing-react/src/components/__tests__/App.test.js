import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import TestComponent from '../App';

const mockStore = configureStore([]);


describe('TestComponent', () => {
  let props;
  let getComponent;
  let store;


  beforeEach(() => {
    props = {};
    store = mockStore({
      comments: []
    });
    getComponent = () => render(<Provider store={store}>
      <TestComponent {...props} />
      </Provider>);
  });

  describe('render', () => {
    
    it('TestComponent should render with empty list', () => {
      const { getByTestId } = getComponent();
      expect(getByTestId('commentsList')).toMatchSnapshot();
    });

    it('TestComponent should render with one list item', async () => {
      const { getByTestId } = getComponent();
      const input = getByTestId('comment-value');
      const submitBtn = getByTestId('button-submit');
      fireEvent.change(input, {target: {value: 'test-comment'}});
      fireEvent.click(submitBtn);
      await waitFor(() => screen.getByTestId('commentsList'));
      expect(getByTestId('commentsList')).toMatchSnapshot();
    });
  });
});
