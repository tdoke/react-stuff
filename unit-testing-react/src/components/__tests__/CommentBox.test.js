import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'

let wrapper

beforeEach(() => {
  wrapper = mount(<CommentBox />)
})

afterEach(() => {
  wrapper.unmount()
})

it('should have textarea and submit button', () => {
  expect(wrapper.find('textarea').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(1)
})

it('has a text area that a user can type in', () => {
  wrapper.find('textarea').simulate('change', {
    target: {
      value: 'test'
    }
  })

  wrapper.update()
  expect(wrapper.find('textarea').prop('value')).toEqual('test')
})
