import { MemoryRouter } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react'
import Register from "../../client/src/components/register.component";



test('full app rendering/navigating', () => {
    render(<Register />, { wrapper: MemoryRouter })
  
    // verify page content for expected route
    expect(screen.getByText(/Register/i)).toBeInTheDocument()
   
  })