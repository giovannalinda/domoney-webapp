import React from 'react'
import { TextField } from 'ui/components/TextField'

export function SignIn() {
  return (
    <>
      <h1>Login</h1>
      <TextField label='e-mail' />
      <button type='submit'>Entrar</button>
    </>
  )
}
