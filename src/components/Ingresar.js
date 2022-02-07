import { Box, Center, Heading, Input } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usuarios } from "../data/usuarios";

function Ingresar() {
  const [iniciaSesion, setIniciaSesion] = useState(false);
  const [usuarioActivo, setUsuarioActivo] = useState("");
  const [inputUsuario, setInputUsuario] = useState("");
  const [inputContrasena, setInputContrasena] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (iniciaSesion) {
      navigate(`/home/${usuarioActivo}`);
    }
  }, [iniciaSesion]);

  useEffect(() => {
    iniciaSesion && navigate(`/home/${usuarioActivo}`);
  }, []);

  const handleOnSubmitLogin = (e) => {
    e.preventDefault();
    if (inputUsuario.trim() !== "" && inputContrasena.trim() !== "") {
      const sesion = usuarios.find((usuario) => {
        if (
          usuario.usuario === inputUsuario &&
          usuario.contrasena === inputContrasena
        ) {
          return usuario;
        } else {
          return false;
        }
      });

      console.log(sesion);
      if (!sesion) {
        alert("usuario o contraseña incorrecta");
      } else {
        setUsuarioActivo(sesion.usuario);
        setIniciaSesion(true);
      }
    }
  };
  return (
    <div>
      <Center>
        <Heading size="2xl" p={10}>
          Bienvenido a CR SERVITECA
        </Heading>
      </Center>

      {/* <div className="row">
        <div className="col-sm-4  p-10">
          <div className="bg-secondary">
            <h2>Reserva Serviteca</h2>
          </div>
          <h4>Datos De Usuario</h4>
          <form>
            <div>
              <h6>Nombre</h6>
              <input
                type="text"
                placeholder="INGRESE SU NOMBRE"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div>
              <h6>Cédula</h6>
              <input type="number" placeholder="CC" />
            </div>
            <div>
              <h6>Contraseña</h6>
              <input type="password" placeholder="INGRESE CONTRASEÑA" />
            </div>
            <div>
              <h6>Email</h6>
              <input type="email" placeholder="INGRESE EMAIL" />
            </div>
            <div>
              <h4>Datos Del Vehículo</h4>
              <div>
                <h6>Placa</h6> <input type="text" placeholder="INGRESA PLACA" />
              </div>
              <div>
                <h6>Marca y Linea</h6>{" "}
                <input type="text" placeholder="INGRESA MARCA Y LINEA" />
              </div>
              <h6>Modelo</h6>{" "}
              <input type="number" placeholder="INGRESA MODELO" />
            </div>
            <br />
            <div>
              <input
                type="submit"
                placeholder="REGISTRO"
                value="Registrarse"
                className="btn btn-dark"
              />
            </div>
          </form>
        </div>*/}
      <Center>
        <Box bg="telegram.500" p={10} borderRadius="xl" maxW="md">
          <form onSubmit={handleOnSubmitLogin}>
            <div>
              <Heading size="2xl">Iniciar Sesión</Heading>
              <div>
                <Heading size="md">Ingresa Usuario</Heading>
                <Input
                  type="text"
                  placeholder="Usuario"
                  value={inputUsuario}
                  onChange={(e) => setInputUsuario(e.target.value)}
                />
              </div>
              <div>
                <Heading size="md">Ingresa Contraseña</Heading>
                <Input
                  type="password"
                  placeholder="Contraseña"
                  value={inputContrasena}
                  onChange={(e) => setInputContrasena(e.target.value)}
                />
              </div>
              <br />
              <div>
                <Center>
                  <input
                    type="submit"
                    placeholder="INICIO DE SESIÓN"
                    value="INGRESAR"
                    className="btn btn-dark"
                  />
                </Center>
              </div>
            </div>
          </form>
          {/*</div>*/}
        </Box>
      </Center>
    </div>
  );
}

export default Ingresar;
