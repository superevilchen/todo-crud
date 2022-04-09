import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { CredentialsModel } from '../../models/CredentialsModel'
import { login } from '../../utils/Networking/TasksApi'
import { loginAction } from '../../redux/AuthAppState'
import store from '../../redux/Store'
import notify, { SccMsg } from '../../utils/Notification'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate();

    const schema = yup.object().shape({
      email: yup.string().required(),
      password: yup.string().required(),
    })
  
  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<CredentialsModel>({
    resolver: yupResolver(schema),
    mode: 'all'
  })

  const loginUser = (credentials: CredentialsModel) => {
    login(credentials)
      .then((response) => {
        store.dispatch(loginAction(response.data))
        notify.success(SccMsg.LOGIN_SUCCESS)
        navigate('/')
      })
      .catch((error) => {
        notify.error(error)
        navigate('/')
    })
  }

  return (
      <div>
          <form onSubmit={handleSubmit(loginUser)}>
        <input type="text" placeholder="email" {...register('email')} />
        <p>{ errors.email?.message }</p>
        <input type="text" placeholder="password" {...register('password')} />
        <p>{ errors.password?.message }</p>
              <button type="submit">login</button>
          </form>
    </div>
  )
}

export default Login