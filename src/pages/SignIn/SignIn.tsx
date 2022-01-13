import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiEye } from 'react-icons/fi'
import { TextField } from 'ui/components/TextField'

import * as S from './SignIn.styled'

type FormData = {
  email: string
  password: string
}

export function SignIn() {
  const [textPass, setTextPass] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  function onSubmit(data: FormData) {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <>
      <h1>Login</h1>
      <S.Content>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <TextField
              label='E-mail'
              errorMessage={errors.email?.message}
              placeholder='Seu melhor e-mail'
              {...register('email', {
                required: {
                  value: true,
                  message: 'Todos os campos são obrigatórios',
                },
              })}
            />
          </fieldset>
          <fieldset>
            <S.Password>
              <TextField
                label='Senha'
                placeholder='Sua melhor senha'
                type={textPass ? 'password' : 'text'}
                {...register('password', {
                  required: true,
                })}
              />
              <button onClick={() => setTextPass(!textPass)} type='button'>
                <FiEye />
              </button>
            </S.Password>
          </fieldset>
          <button type='submit'>Conectar-se</button>
        </S.Form>
      </S.Content>
    </>
  )
}
