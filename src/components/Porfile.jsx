import React from "react";
import { useLocation } from "react-router-dom";

export default function Porfile() {
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div>
      <h1>Prfil</h1>
      <h4 style={{color:"black"}}>Datos del Usuario</h4>
      <p>Nombre: {userData.fullName}</p>
      <p>Apellidos: {userData.lastName}</p>
      <p>Edad: {userData.age}</p>
      <p>Teléfono: {userData.phone}</p>
      <p>Correo: {userData.email}</p>
    </div>
  );
}
