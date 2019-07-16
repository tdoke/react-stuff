import { SAVE_COMMENTS } from 'actions/types';
import CommentsReducer from 'reducers/comments';

it('handles action of type SAVE_COMMENTS', () => {
  const action = {
    type: SAVE_COMMENTS,
    payload: 'test comment'
  }
  const initialState = [];
  const newState = CommentsReducer(initialState, action)
  expect(newState).toEqual(['test comment'])
})

it('handles action of no type', () => {
  const action = {
    type: 'NO_TYPE',
  }
  const initialState = [];
  const newState = CommentsReducer(initialState, action)
  expect(newState).toEqual(initialState)
})