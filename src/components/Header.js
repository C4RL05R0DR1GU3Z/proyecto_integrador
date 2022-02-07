import { Button } from "@chakra-ui/react";
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
      <Button
        borderRadius={40}
        colorScheme="blue"
        margin={3}
        width=""
        onClick={handleReserva}
      >
        Reserva
      </Button>
      <Button borderRadius={40} colorScheme="blue" onClick={handleCerrarSesion}>
        Cerrar Sesión
      </Button>
    </div>
  );
};

export default Header;
