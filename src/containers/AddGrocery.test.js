import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

import { mockStore } from '../mocks/mockStore'
import AddGroceryContainer from './AddGrocery'
// Test that dispatch has been called with addGrocery
describe('AddGroceryContainer', () => {

  function setup() {
    const store = mockStore({})

    const wrapper = mount(
      <Provider store={store}>
        <AddGroceryContainer />
      </Provider>
    )

    const Component = wrapper.find(AddGroceryContainer)

    return {
      Component
    }
  }

  it('should render', () => {
    const { Component } = setup()

    expect(Component.length).toBeTruthy()
  })


})
