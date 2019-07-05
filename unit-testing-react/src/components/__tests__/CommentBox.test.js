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

describe('the textarea', () => {
  beforeEach(() => {
    wrapper.find('textarea').simulate('change', {
      target: {
        value: 'test'
      }
    })

    wrapper.update() // as this.setState() is async, wrapper.update makes sure that the component is updated
    // Forces a re-render. Useful to run before checking the render output if something external may be updating the state of the component somewhere.
  })

  it('has a text area that a user can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('test')
  })

  it('make textarea empty when form is submitted', () => {
    wrapper.find('form').simulate('submit')
    wrapper.update()
    expect(wrapper.find('textarea').prop('value')).toEqual('')
  })

})
