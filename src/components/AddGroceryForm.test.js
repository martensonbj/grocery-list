import React from 'react'
import { shallow, mount } from 'enzyme'

import AddGroceryForm from './AddGroceryForm'

function setup() {
  const submitGrocery = jest.fn()

  const wrapper = mount(
    <AddGroceryForm submitGrocery={submitGrocery} />
  )

  return{
    submitGrocery,
    wrapper
  }
}

describe('AddGroceryForm Component', () => {

  it('should render', () => {
      const {wrapper} = setup()
      const form = wrapper.find('form')
      expect(wrapper.length).toBeTruthy()
      expect(form.length).toEqual(1)
  })

  it('button should be disabled if fields are empty', () => {
    const {wrapper} = setup()
    const button = wrapper.find('[type="submit"]')
    expect(button.props().disabled).toBe(true)
  })

  it('should call submitGrocery when clicked', () =>{
    const {wrapper, submitGrocery} = setup()
    const button = wrapper.find('[type="submit"]')
    const form = wrapper.find('form')
    
    wrapper.setState({ name: 'Bananas'})

    expect(button.props().disabled).toBe(false)

    form.simulate('submit')
    expect(submitGrocery).toHaveBeenCalled()
  })

})
