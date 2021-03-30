
import { MemoryRouter } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react'
import {Signin} from "../client/src/components/signin.component";


test('full app rendering/navigating', () => {
  render(<Signin />, { wrapper: MemoryRouter })

  // verify page content for expected route
  expect(screen.getByText(/Sign In/i)).toBeInTheDocument()
  expect(screen.getByText(/UserName/i)).toBeInTheDocument()
  expect(screen.getByText(/Password/i)).toBeInTheDocument()
})