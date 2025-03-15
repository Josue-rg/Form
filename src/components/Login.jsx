import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [intententos, setIntentos] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const schema = yup.object().shape({
    email: yup.string().required("El correo es requerido").email("Formato invalido"),
    pass: yup.string().required("La contraseña es requerida").min(4, "Minimo 4 caracteres").max(10, "Máximo 10 caracteres"),
  });

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });

  function onSubmit(data) {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && userData.email === data.email && userData.pass === data.pass) {
      navigate('/user-data');
    } else {
      setIntentos(intententos + 1);
      if (intententos >= 2) {
        setErrorMessage('Se excedido el número de intentos');
      } else {
        setErrorMessage('Correo o contraseña incorrectos. ' + (intententos + 1) + '/3.');
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Iniciar Sesión</h1>

        <input type="text" placeholder='Correo electronico' {...register("email")} />
        <p>{errors.email?.message}</p>
        <input type="password" placeholder='Crear contraseña' {...register("pass")} />
        <p>{errors.pass?.message}</p>

        <button type='submit' disabled={!isValid || intententos >= 3}>Ingresar</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
}