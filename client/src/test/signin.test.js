
import { MemoryRouter } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react'
import Signin from "../components/signin.component";
import { shallow } from 'enzyme';


describe('Test case for testing login',() =>{
let wrapper;
test('username check',()=>
{
wrapper = shallow(<Signin/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'SteveWaiter'}});
expect(wrapper.state('username')).toEqual('SteveWaiter');
})


test('full app rendering/navigating', () => {
  render(<Signin />, { wrapper: MemoryRouter })

  // verify page content for expected route
  expect(screen.getByText(/Sign In/i)).toBeInTheDocument()
  expect(screen.getByText(/UserName/i)).toBeInTheDocument()
  expect(screen.getByText(/Password/i)).toBeInTheDocument()
})
})