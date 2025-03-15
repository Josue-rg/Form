import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Porfile() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  const logOff = () => {
    navigate("/login");
  }

  return (
    <div className="perfil-container">
      <div className="card">
        <h1>Perfil</h1>
        <p style={{color:'black'}}>Datos del Usuario</p>
        <p>Nombre: {userData.fullName}</p>
        <p>Apellidos: {userData.lastName}</p>
        <p>Edad: {userData.age}</p>
        <p>Teléfono: {userData.phone}</p>
        <p>Correo: {userData.email}</p>
        
        <button className="btn" onClick={logOff}>Cerrar Sesión</button>
      </div>
    </div>
  );
}
