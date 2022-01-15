import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FiEye } from 'react-icons/fi'

import { TextField } from 'ui/components/TextField'
import image from '../../assets/domoney.svg'

import * as S from './SignIn.styled'

type FormData = {
  email: string
  password: string
}

export function SignIn() {
  const [textPass, setTextPass] = useState(true)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  function onSubmit(data: FormData) {
    console.log(data)
    navigate('/dashboard', { replace: true })
  }

  return (
    <>
      <S.Content>
        <h1>Entre em sua conta</h1>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <TextField
              id='email'
              type='email'
              label='E-mail'
              placeholder='exemplo@gmail.com'
              errorMessage={errors.email?.message}
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
                id='password'
                placeholder='sua melhor senha'
                type={textPass ? 'password' : 'text'}
                {...register('password', {
                  required: true,
                })}
              />
              <button onClick={() => setTextPass(!textPass)} type='button'>
                <FiEye size={18} />
              </button>
            </S.Password>
          </fieldset>

          <button type='submit'>Entrar</button>
          <strong>ou</strong>
          <Link to='/criar-conta'>Criar uma conta</Link>
        </S.Form>
      </S.Content>

      <S.Aside>
        <S.ContentAside>
          <h2>do money.</h2>
          <h1>Assuma o controle das suas finanças.</h1>
          <p>
            Cuidar do seu dinheiro pode ser simples. Com o nosso gerenciador,
            você organiza sua vida financeira.
          </p>
          <img src={image} />
        </S.ContentAside>
      </S.Aside>
    </>
  )
}
