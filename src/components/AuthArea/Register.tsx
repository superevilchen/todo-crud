import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { RegisterModel } from '../../models/RegisterModel';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { CredentialsModel } from '../../models/CredentialsModel';
import { registerNew } from '../../utils/Networking/TasksApi';
import { registerAction } from '../../redux/AuthAppState';
import store from '../../redux/Store';
import notify, { SccMsg } from '../../utils/Notification';

function Register() {

    const navigate = useNavigate();

    const schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required(),
        confirm: yup.string()
            .required("Confirm your password")
            .oneOf([yup.ref('password'), null], 'Passwords must match'),
    })

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<RegisterModel>({
        resolver: yupResolver(schema),
        mode: 'all'
    });
    
    const registerUser = (user: RegisterModel) => {
        let credentials = new CredentialsModel(user.email, user.password)
        registerNew(credentials)
            .then((response) => {
                store.dispatch(registerAction())
                notify.success(SccMsg.REGISTRATION_SUCCESS)
                navigate('/login')
            })
            .catch((error) => {
                notify.error(error)
                navigate('/')
            })
    }
    

  return (
      <div>
          <form onSubmit={handleSubmit(registerUser)}>
              <input type="text" placeholder="email" {...register('email')}/>
              <p>{ errors.email?.message }</p>
              <input type="text" placeholder="password" {...register('password')}/>
              <p>{ errors.password?.message }</p>
              <input type="text" placeholder="confirm password" {...register('confirm')}/>
              <p>{errors.confirm?.message}</p>
              <button type="submit" disabled={!isDirty || !isValid}>register</button>
          </form>
    </div>
  )
}

export default Register