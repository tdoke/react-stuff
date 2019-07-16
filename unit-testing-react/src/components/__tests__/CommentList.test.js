import React from 'react'
import { shallow } from 'enzyme'
import { CommentsList } from 'components/CommentList'

let wrapper
let props

beforeEach(() => {
  props = {
    comments: [] // provide default props here or else wrapper becomes undefined
  }
  wrapper = shallow(<CommentsList {...props} />)
})

afterEach(() => {
  wrapper.unmount()
})

it('should show comments in a list', () => {
  const commentsData = ['test11', 'test2']
  wrapper.setProps({
    comments: commentsData
  })
  expect(wrapper.find('li').length).toEqual(2)
  expect(wrapper).toMatchSnapshot()
})
