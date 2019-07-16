import { SAVE_COMMENTS } from 'actions/types';
import { saveComments } from 'actions/';
describe('unit testing action saveComments', () => {

  it('should have type SAVE_COMMENTS', () => {
    const action = saveComments()
    expect(action.type).toEqual(SAVE_COMMENTS)
  })

  it('should return correct payload', () => {
    const action = saveComments('test')
    expect(action.payload).toEqual('test')
  })
})