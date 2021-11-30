// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login';
import faker from 'faker';


const buildLoginForm = () =>{
  return {
    username:faker.internet.userName(),
    password:faker.internet.password()
  }
}

test('submitting the form calls onSubmit with username and password', () => {
  //let submittedData;
  //const handleSubmit = data =>(submittedData=data)
  
  const {username,password} = buildLoginForm()
  const handleSubmit = jest.fn()
  render(<Login onSubmit={handleSubmit}/>)
  userEvent.type(screen.getByLabelText(/Username/i),username)
  userEvent.type(screen.getByLabelText(/Password/i),password);
  userEvent.click(screen.getByText(/Submit/i))
  expect(handleSubmit).toHaveBeenCalledWith({username,password})
})

/*
eslint
  no-unused-vars: "off",
*/
