import { Box, Button, Center, Heading, Input } from "@chakra-ui/react";
import React from "react";

const Formulario = () => {
  return (
    <div>
      <Center>
        <Box>
          <Heading size="2xl" p={5} height={100}>
            RESERVA CR SERVITECA
          </Heading>

          <Box bg="telegram.500" p={10} borderRadius="xl" maxW="md">
            <Heading size="md">Ingresa Nombre</Heading>
            <Input type="text" placeholder="Nombres" />
            <Heading size="md">Ingresa Apellido</Heading>
            <Input type="text" placeholder="Apellidos" />
            <Heading size="md">Email</Heading>
            <Input type="email" placeholder="Email" />
            <Heading size="md">Ingresa Tipo De Vehículo</Heading>
            <select>
              <option className="bg-info">Tipo De Vehículo</option>
              <option>Automóvil</option>
              <option>Campero</option>
              <option>Camioneta</option>
              <option>Microbús</option>
            </select>
            <Heading size="md">Sedes</Heading>
            <select>
              <option className="bg-info">Sedes</option>
              <option>Norte</option>
              <option>Centro</option>
              <option>Sur</option>
            </select>
            <Heading size="md">Tipo De Servicio</Heading>
            <select>
              <option className="bg-info">Tipo De Servicios</option>
              <option>Alineación</option>
              <option>Balanceo</option>
              <option>Alineacion Y Balanceo</option>
              <option>Cambio De Aceite</option>
              <option>Cambio De Aceite y Balanceo</option>
              <option>Cambio De Aceite Y Alineación</option>
            </select>
            <Heading size="md">Fecha Y Hora</Heading>
            <Input type="datetime-local" placeholder=" Ingresa Fecha Y Hora" />
            <Center>
              {/* <input type="submit" value="RESERVAR" className="btn btn-dark" /> */}
              <Button margin={2}>RESERVAR</Button>
            </Center>
          </Box>
        </Box>
      </Center>
    </div>
  );
};

export default Formulario;
