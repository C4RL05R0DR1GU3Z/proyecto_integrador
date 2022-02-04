import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleCerrarSesion = () => {
    alert("Gracias por visitarnos");
    navigate("/");
  };
  const handleReserva = () => {
    navigate("/Formulario");
  };
  return (
    <div>
      <button onClick={handleCerrarSesion}>Cerrar Sesión</button>
      <button onClick={handleReserva}>Reserva</button>
    </div>
  );
};

export default Header;
