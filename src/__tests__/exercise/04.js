// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()
  render(<Login onSubmit={handleSubmit}/>)
  const userName = screen.getByLabelText(/Username/i)
  const password = screen.getByLabelText(/Password/i)
  userEvent.type(userName,'Faith')
  userEvent.type(password,'password1');
  userEvent.click(screen.getByText(/Submit/i))
  expect(handleSubmit).toHaveBeenCalledWith({username:'Faith',password:'password1'})
})

/*
eslint
  no-unused-vars: "off",
*/
