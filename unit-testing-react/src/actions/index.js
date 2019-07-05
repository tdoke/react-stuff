import { SAVE_COMMENTS } from 'actions/types';

export const saveComments = (comments) => ({
  type: SAVE_COMMENTS,
  payload: comments
})