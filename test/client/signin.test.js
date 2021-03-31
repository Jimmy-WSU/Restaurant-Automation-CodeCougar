
import { MemoryRouter } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react'
import Signin from "../../client/src/components/signin.component";
import '@testing-library/jest-dom'

describe('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<button onClick={mockCallBack}>Ok!</button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

test('full app rendering/navigating', () => {
  render(<Signin />, { wrapper: MemoryRouter })

  // verify page content for expected route
  expect(screen.getByText(/Sign In/i)).toBeInTheDocument()
  expect(screen.getByText(/UserName/i)).toBeInTheDocument()
  expect(screen.getByText(/Password/i)).toBeInTheDocument()
})