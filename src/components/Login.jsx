import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Form from './Form'
export default function Login() {

    const schema =yup.object().shape({
            email: yup.string().required("El correo es requerido").email("Formato invalido"),
            pass: yup.string().required("La contraseña es requerida").min(4, "Minimo 4 caracteres").max(10, "Máximo 10 caracteres"),
    })

const {register,handleSubmit, formState:{errors, isValid}} = useForm({
    resolver: yupResolver(schema), 
    mode: "onChange"
  }) 

  function onSubmit(data){
    console.log(data)
  }

  
   return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Iniciar Sesión</h1>

        <input type="text" placeholder='Correo electronico' {...register("email")}/>
        <p>{errors.email?.message}</p>
        <input type="password" placeholder='Crear contraseña' {...register("pass")}/>
        <p>{errors.pass?.message}</p>

        <button type='submit' disabled={!isValid}>Ingresar</button>



        </form>
    </div>
  )
}
