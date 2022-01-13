import React from 'react'
import { TextField } from 'ui/components/TextField'

export function SignIn() {
  return (
    <>
      <h1>Login</h1>
      <form>
        <TextField label='E-mail' />
      </form>
    </>
  )
}
