import { Box, Button, Center, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [tipoVehiculo, setTipoVehiculo] = useState("");
  const [sedes, setSedes] = useState("");
  const [tipoServicio, setTipoServicio] = useState("");
  const [fechaHora, setFechaHora] = useState("");
  const reservar = (e) => {
    e.preventDefault();
    const array = new Array();
    const contador = array.length;
    array[contador] = new Array();
    array[contador][0] = nombre;
    array[contador][1] = apellido;
    array[contador][2] = email;
    array[contador][3] = tipoVehiculo;
    array[contador][4] = sedes;
    array[contador][5] = tipoServicio;
    array[contador][6] = fechaHora;
    for (let d in array) {
      console.log(array[d]);
    }
  };

  return (
    <div>
      <form onSubmit={reservar}>
        <Center>
          <Box>
            <Heading size="2xl" p={5} height={100}>
              RESERVA CR SERVITECA
            </Heading>

            <Box bg="telegram.500" p={10} borderRadius="xl" maxW="md">
              <Heading size="md">Ingresa Nombre</Heading>
              <Input
                type="text"
                placeholder="Nombres"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <Heading size="md">Ingresa Apellido</Heading>
              <Input
                type="text"
                placeholder="Apellidos"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
              <Heading size="md">Email</Heading>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Heading size="md">Ingresa Tipo De Vehículo</Heading>
              <select
                value={tipoVehiculo}
                onChange={(e) => setTipoVehiculo(e.target.value)}
              >
                <option className="bg-info">Tipo De Vehículo</option>
                <option>Automóvil</option>
                <option>Campero</option>
                <option>Camioneta</option>
                <option>Microbús</option>
              </select>
              <Heading size="md">Sedes</Heading>
              <select value={sedes} onChange={(e) => setSedes(e.target.value)}>
                <option className="bg-info">Sedes</option>
                <option>Norte</option>
                <option>Centro</option>
                <option>Sur</option>
              </select>
              <Heading size="md">Tipo De Servicio</Heading>
              <select
                value={tipoServicio}
                onChange={(e) => setTipoServicio(e.target.value)}
              >
                <option className="bg-info">Tipo De Servicios</option>
                <option>Alineación</option>
                <option>Balanceo</option>
                <option>Alineacion Y Balanceo</option>
                <option>Cambio De Aceite</option>
                <option>Cambio De Aceite y Balanceo</option>
                <option>Cambio De Aceite Y Alineación</option>
              </select>
              <Heading size="md">Fecha Y Hora</Heading>
              <Input
                type="datetime-local"
                placeholder=" Ingresa Fecha Y Hora"
                value={fechaHora}
                onChange={(e) => setFechaHora(e.target.value)}
              />
              <Center>
                <input
                  type="submit"
                  value="RESERVAR"
                  className="btn btn-dark"
                />
              </Center>
            </Box>
          </Box>
        </Center>
      </form>
    </div>
  );
};

export default Formulario;
