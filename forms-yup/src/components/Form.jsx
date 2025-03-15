import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export default function Form() {

  const schema = yup.object().shape({
    fullName: yup.string().required("Nombre es requerido"),
    lastName: yup.string().required("Apellido es requerido"),
    email: yup.string().required("El correo es requerido").email("Formato invalido"),
    age: yup.number().required("La edad es requerida").integer("Debes ingresar un numero entero").min(18, "La edad minima debe de ser de 18 años").typeError(""),
    pass: yup.string().required("La contraseña es requerida").min(4, "Minimo 4 caracteres").max(10, "Máximo 10 caracteres"),
    confirmPass: yup.string().oneOf([yup.ref("pass"), null], "La contraseña debe de coincidir")
  })

  const {register,handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })
  function onSubmit(data){
    console.log(data)
  }

  return (
    <div>
      <div>
        <h1>Formulario de registro</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Nombre Completo' {...register("name")}/>
        <p>{errors.name?.message}</p>
        <input type="text" placeholder='Correo electronico' {...register("email")}/>
        <p>{errors.email?.message}</p>
        <input type="number" placeholder='Edad' {...register("age")}/>
        <p>{errors.age?.message}</p>
        <input type="password" placeholder='Ingresa la contraseña' {...register("pass")}/>
        <p>{errors.pass?.message}</p>
        <input type="password" placeholder='Confirma contraseña' {...register("confirmPass")}/>
        <p>{errors.confirmPass?.message}</p>
        <input type='submit'/>
      </form>
    </div>
  )
}
