import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export default function Form() {

  const schema = yup.object().shape({
    fullName: yup.string().required("Nombre requerido"),
    lastName: yup.string().required("Apellidos requerido"),
    age: yup.number().required("Edad requerida").integer("Debes ingresar un numero entero").min(18, "La edad minima debe de ser de 18 años").typeError(""),
    phone: yup.number().required("Telefono requerido").typeError("Ingresar un numero válido"),
    email: yup.string().required("El correo es requerido").email("Formato invalido"),
    pass: yup.string().required("La contraseña es requerida").min(4, "Minimo 4 caracteres").max(10, "Máximo 10 caracteres"),
    confirmPass: yup.string().oneOf([yup.ref("pass"), null], "La contraseña debe de coincidir")
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
      <div>
        <h1>Formulario de registro</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Nombre' {...register("fullName")}/>
        <p>{errors.fullName?.message}</p>
        <input type="text" placeholder='Apellidos' {...register("lastName")} />
        <p>{errors.lastName?.message}</p>
        <input type="number" placeholder='Edad' {...register("age")}/>
        <p>{errors.age?.message}</p>
        <input type="number" placeholder='Telefono' {...register("phone")}/>
        <p>{errors.phone?.message}</p>
        <input type="text" placeholder='Correo electronico' {...register("email")}/>
        <p>{errors.email?.message}</p>
        <input type="password" placeholder='Crear contraseña' {...register("pass")}/>
        <p>{errors.pass?.message}</p>
        <input type="password" placeholder='Confirmar contraseña' {...register("confirmPass")}/>
        <p>{errors.confirmPass?.message}</p>
        <button type='submit' disabled={!isValid}>Registrar</button>
      </form>
    </div>
  )
}
