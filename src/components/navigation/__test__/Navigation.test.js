import React from 'react'
import { shallow } from 'enzyme'
import Navbar from 'react-bootstrap/Navbar'
import Navigation from '../Navigation'

describe('<Navigation />', () => {
  const wrapper = shallow(<Navigation />)

  it('renders', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('renders brand component', () => {
    expect(wrapper.find(Navbar.Brand)).toHaveLength(1)
  })
})
