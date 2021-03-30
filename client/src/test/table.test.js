import { MemoryRouter } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react'
import table from "../components/table.component";

test('full app rendering/navigating', () => {
  render(<table />, { wrapper: MemoryRouter })

  // verify page content for expected route

})
